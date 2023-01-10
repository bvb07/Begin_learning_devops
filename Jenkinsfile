def envProps
 
pipeline {
    
    agent none
 
    environment {
        MAVEN_IMAGE = 'maven:3.6.2-jdk-11'
        MAVEN_IMAGE_ARGS = '-v /root/jenkins_home/ssh:/ssh -v /root/jenkins_home/.m2:/root/.m2:z -u root'
        NODE_IMAGE = 'node:12.13.0'
        NODE_IMAGE_ARGS = '-u 0:0'
        DOCKER_IMAGE = ''
    }
 
    stages {
 
        stage('Read .env') {
            
            agent any
 
            steps{
                echo 'Read .env'
                echo '******************************'
                script {
                    def envFile = readFile("${env.JENKINS_HOME}/deploy/account.env");
                    def map = [:], lines = envFile.split("\r?\n"); 
                    for (def line : lines) {
                        def arr = line.split("=");
                        map.put(arr[0], arr[1]);
                    }
                    envProps = map;
                }
            }
        }
 
        ...
 
    }
}
