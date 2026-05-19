$word = New-Object -ComObject Word.Application
$word.Visible = $false
$folder = "d:\works\IT\Wiz\DOHaD\public\policies"
$files = Get-ChildItem -Path $folder -Filter *.docx

foreach ($file in $files) {
    $doc = $word.Documents.Open($file.FullName)
    $pdfName = $file.FullName -replace "\.docx$", ".pdf"
    Write-Host "Converting $($file.Name) to PDF..."
    $doc.SaveAs([ref]$pdfName, [ref]17)
    $doc.Close()
}

$word.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($word)
