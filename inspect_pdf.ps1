$pdfPath = "src/assets/Jordan 2076 - Sponsors logos/Silver Sponsor/vbc logo .pdf"
Write-Output "PDF exists: $(Test-Path $pdfPath)"
$fileInfo = Get-Item $pdfPath
Write-Output "Size: $($fileInfo.Length) bytes"

# Read bytes or text in PDF to see what streams/fonts it has
$bytes = [System.IO.File]::ReadAllBytes($pdfPath)
$text = [System.Text.Encoding]::ASCII.GetString($bytes)
if ($text -match '/Filter\s*/DCTDecode') {
    Write-Output "Contains JPEG images"
}
if ($text -match '/Filter\s*/FlateDecode') {
    Write-Output "Contains Flate streams (vectors or compressed png)"
}
