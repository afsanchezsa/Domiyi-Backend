pipeline {
 agent any

 tools {nodejs "node"}

 stages {
   stage('Install') {
     steps {
       sh'
       curl "https://api.github.com/repos/afsanchezsa/Domiyi-Backend/statuses/$GIT_COMMIT?access_token=4ccd232d1a4937aa0827def57708f808fe52b1bb" \
                      -H "Content-Type: application/json" \
                      -X POST \
                      -d "{\"state\": \"pending\",\"context\": \"continuous-integration/jenkins\", \"description\": \"Jenkins\", \"target_url\": \"$BUILD_URL\"}"
       '
       sh 'npm install'
     }
   }
stage('Test') {
     steps {
       sh 'node ./node_modules/mocha/bin/mocha --exit test/test.js'
     }
   }
 }
 post{
always{
  sh'
   curl "https://api.github.com/repos/afsanchezsa/Domiyi-Backend/statuses/$GIT_COMMIT?access_token=4ccd232d1a4937aa0827def57708f808fe52b1bb" \
                  -H "Content-Type: application/json" \
                  -X POST \
                  -d "{\"state\": \"$BUILD_STATUS\",\"context\": \"continuous-integration/jenkins\", \"description\": \"Jenkins\", \"target_url\": \"$BUILD_URL\"}"
            
  
  '
}




 }
}
