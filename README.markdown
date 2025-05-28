# M4A to MP3 Converter

A simple Python script to convert M4A audio files to MP3 format using the `pydub` library.

## Requirements
- Python 3.6 or higher
- `pydub` library
- `ffmpeg` installed on your system

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/m4a-to-mp3-converter.git
   cd m4a-to-mp3-converter
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Install `ffmpeg`:
   - **Windows**: Download from [FFmpeg website](https://ffmpeg.org/download.html) and add to PATH.
   - **MacOS**: `brew install ffmpeg`
   - **Linux**: `sudo apt-get install ffmpeg` (Ubuntu/Debian) or equivalent.

## Usage
Run the script to convert an M4A file to MP3 using hardcoded paths:
```bash
python m4a_to_mp3_converter.py
```

The script uses the following default paths:
- Input: `D:\aroosak\name.m4a`
- Output: `D:\aroosak\output.mp3`

To use different paths, modify the `input_file` and `output_file` variables in the `main()` function of `m4a_to_mp3_converter.py`.

## Notes
- Ensure the input file exists at the specified path.
- The output directory must exist before running the script.
- The script sets the output to 44.1kHz stereo with a bitrate of 192kbps.

## License
MIT License