"""
m4a_to_mp3_converter.py

A simple Python script to convert M4A audio files to MP3 format using pydub.
Requires `pydub` and `ffmpeg` to be installed.
"""

from pydub import AudioSegment
import os

def convert_m4a_to_mp3(input_file: str, output_file: str) -> None:
    """
    Convert an M4A audio file to MP3 format.

    Args:
        input_file (str): Path to the input M4A file.
        output_file (str): Path to save the output MP3 file.
    """
    try:
        # Load M4A file
        audio = AudioSegment.from_file(input_file, format="m4a")
        
        # Set audio parameters (optional)
        audio = audio.set_frame_rate(44100)  # Set sample rate to 44100 Hz
        audio = audio.set_channels(2)        # Set to stereo
        
        # Export as MP3
        audio.export(output_file, format="mp3", bitrate="192k")
        print(f"Conversion successful: {input_file} -> {output_file}")
    
    except Exception as e:
        print(f"Error during conversion: {str(e)}")

def main() -> None:
    """
    Main function to perform the conversion with hardcoded file paths.
    """
    # Hardcoded file paths
    input_file = r"D:\aroosak\name.m4a"  # Path to input M4A file
    output_file = r"D:\aroosak\output.mp3"  # Path to output MP3 file
    
    # Print current working directory for debugging
    print(f"Current working directory: {os.getcwd()}")
    
    # Check if input file exists
    if not os.path.exists(input_file):
        print(f"Error: Input file '{input_file}' not found!")
        return
    
    # Check if output directory exists
    output_dir = os.path.dirname(output_file) or "."
    if not os.path.exists(output_dir):
        print(f"Error: Output directory '{output_dir}' does not exist!")
        return
    
    # Perform conversion
    convert_m4a_to_mp3(input_file, output_file)

if __name__ == "__main__":
    main()