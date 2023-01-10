pipeline {
    agent  any
    stages {
        stage('Install Node.js') {
            steps {
                sh 'sudo curl -sL https://deb.nodesource.com/setup_14.x | bash -'
                sh 'sudo apt-get install -y nodejs'
            }
        }
        stage('Test Node.js') {
            steps {
                sh 'node -v'
            }
        }
    }
}
