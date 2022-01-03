def remote = [:]
remote.name = "webspace"
withCredentials([string(credentialsId: "WEBSPACE_HOST", variable: "host"),usernamePassword(credentialsId: "webspace", passwordVariable: 'password', usernameVariable: 'userName')]) {
    remote.host = host    
    remote.user = userName
    remote.password = password
}
remote.allowAnyHosts = true
pipeline {
    
    agent any

    stages {
        stage("Clone repository") {
            steps {
                sshCommand remote: remote, command: "rm -rf autoupdate-server; git clone https://github.com/NeverStopGaming/autoupdate-server.git"
            }
        }
        stage("Build image") {
            steps {
                /* This builds the actual image; synonymous to
                * docker build on the command line */
         
                sshCommand remote: remote, command: "cd autoupdate-server; docker build -t ${image} ."
            }
        }
        stage("Deploy") {
            steps {
                sshCommand remote: remote, command: "cd autoupdate-server; docker rm Update-Server; docker run --name Update-Server -d -p 3000:3000 neverstopgaming/update-server"
            }
        }
    }

    post {
        always {
            discordSend description: "ProxySystem Build: " + currentBuild.currentResult, footer: "Made by SteinGaming", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/924398901409247272/WmvYATxvXjEdSyXCtGz5dcRr1KvuAEg__2hLnBAviv-Zz6Vd9p95LAf0qMvSHdlQnMsh"
        }
    }
}
