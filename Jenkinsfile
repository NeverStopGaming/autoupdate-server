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
        stage("Deleting Docker") {
            steps {
                sshCommand remote: remote, command: "docker stop Update-Server; docker rm Update-Server; docker rmi neverstopgaming/update-server"
            }
        }
        stage("Clone repository and Delete old Ordner") {
            steps {
                sshCommand remote: remote, command: "rm -rf autoupdate-server; git clone https://github.com/NeverStopGaming/autoupdate-server.git"
            }
        }
        stage("Build image") {
            steps {
                sshCommand remote: remote, command: "cd autoupdate-server; docker build . -t neverstopgaming/update-server"
            }
        }
        stage("Deploy") {
            steps {
                sshCommand remote: remote, command: "cd autoupdate-server; docker run --name Update-Server -d -p 803:3000 neverstopgaming/update-server"
            }
        }
    }

    post {
        always {
            discordSend description: "" + currentBuild.currentResult, footer: "Made by SteinGaming", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://canary.discord.com/api/webhooks/927533140916977696/TwP_p6zm-CtgRXquJWRZ2DShlVqfBJJ5YqcIPQeYneQ21A7cLQm6azhaMThKY3yt0cVW"
        }
    }
}
