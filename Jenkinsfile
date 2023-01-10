pipeline {
    agent {
        docker {
            image 'jenkins/jenkins:latest-jdk11'
        }
    }
    stages {
        stage('Install Node.js') {
            steps {
                sh 'curl -sL https://deb.nodesource.com/setup_14.x | bash -'
                sh 'apt-get install -y nodejs'
            }
        }
        stage('Test Node.js') {
            steps {
                sh 'node -v'
            }
        }
    }
}
