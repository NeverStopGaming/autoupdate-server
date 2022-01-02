environment {
    WEBSPACE_CREDS = credentials('webspace')
}

def remote = [:]
remote.name = "WEBSPACE_CREDS_USR"
remote.password = 'WEBSPACE_CREDS_PSW'
remote.host = "WEBSPACE_HOST"
remote.allowAnyHosts = true

node {
    def app
    def image = "neverstopgaming/update-server"

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        sshCommand remote: remote, command: "git clone https://github.com/NeverStopGaming/autoupdate-server.git"
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */
         
        sshCommand remote: remote, command: "docker build -t ${image} ."
    }

    stage('Deploy') {

        sshCommand remote: remote, command: "docker rm Update-Server"
        sshCommand remote: remote, command: "docker run --name Update-Server -d -p 3000:3000 neverstopgaming/update-server"
        
    }
}