Add-Type -AssemblyName System.Drawing
$imgPath = 'C:\Users\Home\.gemini\antigravity-ide\brain\fc05b50f-bd3b-4c25-a02d-be2996cd1a0f\.user_uploaded\media_1790723763012.png'
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)
Write-Output "Size: $($bmp.Width) x $($bmp.Height)"
Write-Output "Format: $($bmp.PixelFormat)"
# Sample some pixels
Write-Output "Pixel 0,0: $($bmp.GetPixel(0,0))"
$bmp.Dispose()
