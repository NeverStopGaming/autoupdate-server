# Autoupdate Server
Autoupdater server for plugins from NeverStopGaming

### Install

1. Download the Reposetory from GitHub ``git clone https://github.com/NeverStopGaming/autoupdate-server.git``
2. Build the Image ``docker build . -t neverstopgaming/update-server``
3. Run the Container ``docker run --name Update-Server -d -p 803:3000 neverstopgaming/update-server``
