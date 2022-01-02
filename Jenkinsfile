def remote = [:]
remote.name = "webspace"
remote.host = "${WEBSPACE_HOST}"
remote.allowAnyHosts = true

node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("neverstopgaming/autoupdate-server")
    }

    stage('Deploy') {

        sshCommand remote: remote, command: "docker rm Update-Server"
        sshCommand remote: remote, command: "docker run --name Update-Server -d -p 3000:3000 neverstopgaming/update-server"
        
    }
}