def remote = [:]
remote.name = "devserver"
remote.host = "devserver.NeverStopGaming.net"
remote.allowAnyHosts = true
pipeline {
    
    agent any

    stages {
        steps("Clone repository") {
            
            sshCommand remote: remote, command: "git clone https://github.com/NeverStopGaming/autoupdate-server.git"
            
        }
        steps("Build image") {
            /* This builds the actual image; synonymous to
            * docker build on the command line */
         
            sshCommand remote: remote, command: "docker build -t ${image} ."
        }
        steps("Deploy") {
            
            sshCommand remote: remote, command: "docker rm Update-Server"
            sshCommand remote: remote, command: "docker run --name Update-Server -d -p 3000:3000 neverstopgaming/update-server"
            
        }
    }

    post {
        always {
            discordSend description: "ProxySystem Build: " + currentBuild.currentResult, footer: "Made by SteinGaming", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: ""
        }
    }
}