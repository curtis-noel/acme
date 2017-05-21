#!/usr/bin/env groovy

node {
    stage('checkout') {
        checkout scm
    }

    stage('check java') {
        sh "java -version"
    }

    stage('clean') {
        sh "chmod +x gradlew"
        sh "./gradlew clean --no-daemon"
    }

    stage('install tools') {
        sh "./gradlew yarn_install -PnodeInstall --no-daemon"
    }

    stage('backend tests') {
        try {
            sh "./gradlew test -PnodeInstall --no-daemon"
        } catch(err) {
            throw err
        } finally {
            junit '**/build/**/TEST-*.xml'
        }
    }

    stage('frontend tests') {
        try {
            sh "./gradlew yarn_test -PnodeInstall --no-daemon"
        } catch(err) {
            throw err
        } finally {
            junit '**/build/test-results/karma/TESTS-*.xml'
        }
    }

    stage('packaging') {
        sh "./gradlew bootRepackage -x test -Pprod -PnodeInstall --no-daemon"
        archiveArtifacts artifacts: '**/build/libs/*.war', fingerprint: true
    }


    def dockerImage
    stage('build docker') {
        sh "cp -R src/main/docker build/"
        sh "cp build/libs/*.war build/docker/"
        dockerImage = docker.build('acme', 'build/docker')
    }

    stage('publish docker') {
        docker.withRegistry('https://hub.docker.com/r/wolf685cln/acme/','wolf685cln') {
            dockerImage.push 'latest'
        }
    }
}

steve grunch
myaccess -> include technical systems
ec objective

    master jenkins - myaccess (nfts-devops, nfts-admin)
    openshift access - myaccess - g1185, request access dev access openshift
    request aws access g1185 for master jenkins access
    orchestrate, isd create project in fortify (rob c), sonarcube (rob & rob)
    jenkins file templates - get from rob b
    kong?
