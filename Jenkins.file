pipeline {
    agent any
    stages {
        stage('stop'){
            steps{
                sh '''
                cd compose
                docker-compose down 
                '''
           }
        }
       


        
    }
}
