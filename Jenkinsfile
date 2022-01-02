def remote = [:]
remote.name = "webspace"
remote.host = "WEBSPACE_HOST"
remote.allowAnyHosts = true
pipeline {
    
    agent any

    stages {
        stage("Clone repository") {
            steps {
                sshCommand remote: remote, command: "git clone https://github.com/NeverStopGaming/autoupdate-server.git"
            }
        }
        stage("Build image") {
            steps {
                /* This builds the actual image; synonymous to
                * docker build on the command line */
         
                sshCommand remote: remote, command: "docker build -t ${image} ."
            }
        }
        stage("Deploy") {
            steps {
                sshCommand remote: remote, command: "docker rm Update-Server"
                sshCommand remote: remote, command: "docker run --name Update-Server -d -p 3000:3000 neverstopgaming/update-server"
            }
        }
    }

    post {
        always {
            discordSend description: "ProxySystem Build: " + currentBuild.currentResult, footer: "Made by SteinGaming", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: ""
        }
    }
}