# will delete this and this and this and this

#test repo #2

## Requirements

- Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Install [Node](https://nodejs.org/en/download/package-manager/)
- Install [Brew](https://brew.sh/)
- Install [Yarn](https://yarnpkg.com/en/docs/install)
- Install Serverless Framework
  - `$ yarn global add serverless`
- Add yarn binary directory to your `~/.bash_profile`
  - `export PATH=$PATH:/usr/local/Cellar/node/8.1.2/bin` 

## Setup
- Clone Git repository
  - `$ git clone https://github.com/amuratova/slash-command-lambda-backend.git`
- Add `[serverless` AWS credentials profile to `~/.aws/credentials`
    ```
    [serverless]
    aws_access_key_id=***
    aws_secret_access_key=***
    ```
- Install node modules
  - `$ yarn install`
- Deploy the service
  - `$ sls deploy`

