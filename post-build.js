const fs = require('fs');
const path = require('path');

// Define the .htaccess content
const htaccessContent = `
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [QSA,L]
</IfModule>
`;

// Define the path to the .htaccess file in the www directory
const htaccessPath = path.join(__dirname, 'www', '.htaccess');

// Write the .htaccess file
fs.writeFileSync(htaccessPath, htaccessContent, 'utf8');
console.log('.htaccess file created successfully!');