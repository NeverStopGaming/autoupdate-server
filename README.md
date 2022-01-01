# Autoupdate Server
Autoupdater server for NeverStopGaming plugin to check if they are update

### Install

1. Download the Reposetory from GitHub ``git clone https://github.com/NeverStopGaming/autoupdate-server.git``
2. Build the Image ``docker build . -t neverstopgaming/update-server``
3. Run the Container ``docker run -d -p 3000:3000 neverstopgaming/update-server``
