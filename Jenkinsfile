pipeline {
    agent {
        docker {
            image 'jenkins/jenkins:lts'
        }
    }
    stages {
        stage('Install kubectl') {
            steps {
                sh 'apt-get update'
                sh 'apt-get install -y apt-transport-https'
                sh 'curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -'
                sh 'echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | tee -a /etc/apt/sources.list.d/kubernetes.list'
                sh 'apt-get update'
                sh 'apt-get install -y kubectl'
            }
        }
    }
}
