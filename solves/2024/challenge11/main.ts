function decodeFilename(filename: string): string {
  return filename.split('_').slice(1).join('_').split('.').slice(0, 2).join('.');
}
decodeFilename('2023122512345678_sleighDesign.png.grinchwa');
// ➞ "sleighDesign.png"

decodeFilename('42_chimney_dimensions.pdf.hack2023');
// ➞ "chimney_dimensions.pdf"

decodeFilename('987654321_elf-roster.csv.tempfile');
// ➞ "elf-roster.csv"
