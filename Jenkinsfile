pipeline {
    agent any
    stages {
        stage('clone') {
            steps {
                git url: 'https://github.com/sreeraj2004/jenkins3.git', branch: 'master'
            }
        }

        stage('Clone and run') {
            steps {
                bat 'docker container rm -f jenkins-container || exit 0'
                bat 'docker build -t jenkins-image .'
                bat 'docker run -d -p 5000:5000 --name jenkins-container jenkins-image'
            }
        }

        stage('deploy') {
            steps {
                echo "Deployment completed"
            }
        }
    }
}
