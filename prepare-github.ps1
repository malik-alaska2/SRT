$filesToCopy = @{
  "css/style.css" = "style.css"
  "js/main.js" = "main.js"
  "js/mail.js" = "mail.js"
  "assets/logo.png" = "logo.png"
}

foreach ($source in $filesToCopy.Keys) {
  $destination = $filesToCopy[$source]
  Copy-Item -Path $source -Destination $destination -Force
  Write-Output "Updated $destination"
}
