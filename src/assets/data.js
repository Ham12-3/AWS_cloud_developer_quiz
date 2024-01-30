export const data =[
  
  {
    "question": "A developer is building a serverless application on AWS that requires user authentication. Which service is most suitable for implementing user authentication and authorization?",
    "options": {
      "A": "AWS IAM",
      "B": "AWS Cognito",
      "C": "AWS Secrets Manager",
      "D": "AWS Directory Service"
    },
    "correct_answer": "B"
  },
  {
    "question": "An application requires real-time updates to a web interface based on changes in a DynamoDB table. Which AWS service or feature is best suited for achieving this?",
    "options": {
      "A": "AWS CloudFront",
      "B": "AWS AppSync",
      "C": "AWS Lambda",
      "D": "AWS Step Functions"
    },
    "correct_answer": "B"
  },
  {
    "question": "A developer needs to ensure that code deployed to AWS Lambda functions is automatically tested before deployment. Which AWS service or tool should the developer use to achieve this?",
    "options": {
      "A": "AWS CodeDeploy",
      "B": "AWS CodeCommit",
      "C": "AWS CodePipeline",
      "D": "AWS CodeBuild"
    },
    "correct_answer": "C"
  },
  {
    "question": "An application needs to store large amounts of unstructured data with low latency access. Which AWS service is the best fit for this requirement?",
    "options": {
      "A": "Amazon S3",
      "B": "Amazon RDS",
      "C": "Amazon DynamoDB",
      "D": "Amazon Redshift"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer needs to deploy a Dockerized application to AWS while maintaining control over the underlying infrastructure. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon ECS",
      "B": "AWS Fargate",
      "C": "Amazon EKS",
      "D": "AWS Lambda"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application running on EC2 instances requires a centralized logging solution. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon CloudWatch Logs",
      "B": "Amazon S3",
      "C": "Amazon Elasticsearch Service",
      "D": "AWS X-Ray"
    },
    "correct_answer": "A"
  },
  {
    "question": "A developer wants to ensure that AWS Lambda functions can access resources within a VPC. Which configuration should the developer use?",
    "options": {
      "A": "Public subnet with an internet gateway",
      "B": "Private subnet with a NAT gateway",
      "C": "Public subnet with a VPC endpoint",
      "D": "Private subnet with a VPC peering connection"
    },
    "correct_answer": "B"
  },
  {
    "question": "An application requires long-term storage of relational data with complex queries. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon S3",
      "B": "Amazon DynamoDB",
      "C": "Amazon RDS",
      "D": "Amazon Redshift"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer wants to ensure that EC2 instances in an Auto Scaling group can automatically scale based on CPU utilization. Which AWS service should the developer configure?",
    "options": {
      "A": "Amazon CloudWatch",
      "B": "Amazon SQS",
      "C": "AWS Lambda",
      "D": "Amazon SNS"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to send notifications to users via email and SMS. Which AWS service should the developer use to achieve this?",
    "options": {
      "A": "Amazon SNS",
      "B": "Amazon SES",
      "C": "Amazon SQS",
      "D": "AWS Lambda"
    },
    "correct_answer": "A"
  },
  {
    "question": "A developer needs to ensure that a containerized application running on AWS ECS can be accessed securely from the internet. Which AWS service should the developer use?",
    "options": {
      "A": "AWS WAF",
      "B": "Amazon Route 53",
      "C": "AWS VPN",
      "D": "Amazon VPC"
    },
    "correct_answer": "D"
  },
  {
    "question": "An application requires real-time streaming data processing with low-latency. Which AWS service is most suitable for this requirement?",
    "options": {
      "A": "Amazon Kinesis",
      "B": "Amazon SQS",
      "C": "Amazon SNS",
      "D": "Amazon MQ"
    },
    "correct_answer": "A"
  },
  {
    "question": "A developer needs to trigger an AWS Lambda function whenever an object is uploaded to an S3 bucket. Which AWS service or feature should the developer use to achieve this?",
    "options": {
      "A": "AWS CloudTrail",
      "B": "Amazon SNS",
      "C": "Amazon EventBridge",
      "D": "AWS Config"
    },
    "correct_answer": "C"
  },
  {
    "question": "An application needs to provide users with a secure way to upload files directly to an S3 bucket from a web browser. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon S3 Transfer Acceleration",
      "B": "AWS Transfer Family",
      "C": "Amazon CloudFront",
      "D": "Amazon S3 presigned URLs"
    },
    "correct_answer": "D"
  },
  {
    "question": "A developer needs to deploy a highly available web application on AWS. Which AWS service provides managed load balancing for distributing incoming application traffic?",
    "options": {
      "A": "Amazon EC2 Auto Scaling",
      "B": "Amazon Route 53",
      "C": "Amazon ELB",
      "D": "Amazon CloudFront"
    },
    "correct_answer": "C"
  },
  {
    "question": "An application needs to ensure that data stored in an S3 bucket is encrypted at rest. Which encryption option should the developer enable?",
    "options": {
      "A": "Server-Side Encryption with Amazon S3 Managed Keys (SSE-S3)",
      "B": "Server-Side Encryption with AWS KMS Managed Keys (SSE-KMS)",
      "C": "Client-Side Encryption with AWS SDK",
      "D": "Client-Side Encryption with AWS CLI"
    },
    "correct_answer": "B"
  },
  {
    "question": "A developer wants to monitor the health of EC2 instances and trigger automated actions based on predefined thresholds. Which AWS service provides this capability?",
    "options": {
      "A": "Amazon CloudWatch",
      "B": "Amazon Inspector",
      "C": "AWS Health",
      "D": "AWS Trusted Advisor"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to process and analyze large datasets in real-time. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon Redshift",
      "B": "Amazon Athena",
      "C": "Amazon Kinesis",
      "D": "Amazon RDS"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer wants to deploy a containerized application to AWS while minimizing management overhead. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon ECS",
      "B": "AWS Fargate",
      "C": "Amazon EKS",
      "D": "Amazon Lightsail"
    },
    "correct_answer": "B"
  },
  {
    "question": "An application needs to trigger an AWS Lambda function at regular intervals. Which AWS service should the developer use to schedule the function invocation?",
    "options": {
      "A": "Amazon CloudWatch Events",
      "B": "Amazon S3 Event Notifications",
      "C": "Amazon SQS",
      "D": "AWS Step Functions"
    },
    "correct_answer": "A"
  },
  {
    "question": "A developer needs to deploy a scalable web application on AWS with built-in content delivery and edge caching. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon EC2",
      "B": "Amazon S3",
      "C": "Amazon CloudFront",
      "D": "Amazon Route 53"
    },
    "correct_answer": "C"
  },
  {
    "question": "An application needs to invoke a Lambda function synchronously over HTTPS. Which AWS service should the developer use to create the HTTPS endpoint?",
    "options": {
      "A": "Amazon API Gateway",
      "B": "Amazon CloudFront",
      "C": "Amazon Route 53",
      "D": "AWS AppSync"
    },
    "correct_answer": "A"
  },
  {
    "question": "A developer needs to implement automated provisioning and management of AWS resources. Which AWS service provides infrastructure as code capabilities?",
    "options": {
      "A": "AWS CloudFormation",
      "B": "AWS OpsWorks",
      "C": "Amazon Elastic Beanstalk",
      "D": "AWS CodeDeploy"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application requires a fully managed SQL database service with automated backups, scaling, and high availability. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon Aurora",
      "B": "Amazon RDS",
      "C": "Amazon DynamoDB",
      "D": "Amazon Redshift"
    },
    "correct_answer": "B"
  },
  {
    "question": "A developer wants to deploy a web application to AWS without managing the underlying infrastructure. Which AWS service provides a fully managed platform for deploying web applications?",
    "options": {
      "A": "Amazon EC2",
      "B": "AWS Fargate",
      "C": "Amazon Elastic Beanstalk",
      "D": "Amazon Lightsail"
    },
    "correct_answer": "C"
  },
  {
    "question": "An application requires a durable and scalable object storage solution with low latency access. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon EBS",
      "B": "Amazon EFS",
      "C": "Amazon S3",
      "D": "Amazon Glacier"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer needs to deploy a highly available relational database service on AWS with automated failover and backups. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon Aurora",
      "C": "Amazon DynamoDB",
      "D": "Amazon Redshift"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to process and analyze streaming data from various sources in real-time. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon Redshift",
      "B": "Amazon Athena",
      "C": "Amazon Kinesis",
      "D": "Amazon RDS"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer wants to ensure that web applications deployed on AWS can handle sudden traffic spikes without manual intervention. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon EC2 Auto Scaling",
      "B": "Amazon Route 53",
      "C": "Amazon ELB",
      "D": "Amazon CloudFront"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to store sensitive data in a highly secure manner on AWS. Which AWS service provides centralized management of encryption keys?",
    "options": {
      "A": "AWS KMS",
      "B": "Amazon S3",
      "C": "AWS Secrets Manager",
      "D": "AWS IAM"
    },
    "correct_answer": "A"
  },
  {
    "question": "A developer needs to ensure that a web application hosted on AWS is accessible via HTTPS. Which AWS service should the developer use to configure SSL/TLS certificates?",
    "options": {
      "A": "Amazon Certificate Manager (ACM)",
      "B": "AWS IAM",
      "C": "AWS Key Management Service (KMS)",
      "D": "AWS WAF"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to process messages asynchronously and ensure that each message is processed exactly once. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon SQS",
      "B": "Amazon SNS",
      "C": "Amazon MQ",
      "D": "Amazon Kinesis"
    },
    "correct_answer": "A"
  },
  {
    "question": "A developer needs to deploy a scalable, serverless application on AWS with event-driven architecture. Which AWS service should the developer use?",
    "options": {
      "A": "AWS Lambda",
      "B": "Amazon EC2",
      "C": "Amazon ECS",
      "D": "Amazon RDS"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to authenticate and authorize users securely on AWS. Which AWS service provides identity federation and single sign-on capabilities?",
    "options": {
      "A": "AWS IAM",
      "B": "Amazon Cognito",
      "C": "AWS Directory Service",
      "D": "AWS Organizations"
    },
    "correct_answer": "B"
  },
  {
    "question": "A developer needs to monitor and debug applications running on AWS with distributed tracing and performance analysis. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon CloudWatch",
      "B": "Amazon Inspector",
      "C": "AWS X-Ray",
      "D": "AWS CloudTrail"
    },
    "correct_answer": "C"
  },
  {
    "question": "An application requires a managed NoSQL database service with low latency access and automated scaling. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon Redshift",
      "C": "Amazon DynamoDB",
      "D": "Amazon Aurora"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer needs to automate the deployment of code changes to AWS while maintaining control over the release process. Which AWS service provides continuous integration and continuous deployment capabilities?",
    "options": {
      "A": "AWS CodePipeline",
      "B": "AWS CodeCommit",
      "C": "AWS CodeDeploy",
      "D": "AWS CodeBuild"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to process large-scale data analytics with distributed queries and parallel processing. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon Athena",
      "B": "Amazon Redshift",
      "C": "Amazon EMR",
      "D": "Amazon RDS"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer needs to store and retrieve large files in a scalable and cost-effective manner on AWS. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon EBS",
      "B": "Amazon EFS",
      "C": "Amazon S3",
      "D": "Amazon Glacier"
    },
    "correct_answer": "C"
  },
  {
    "question": "An application needs to ensure that data is replicated across multiple AWS regions for disaster recovery. Which AWS service provides cross-region replication for data stored in S3 buckets?",
    "options": {
      "A": "Amazon Route 53",
      "B": "Amazon S3 Transfer Acceleration",
      "C": "Amazon S3 Cross-Region Replication",
      "D": "Amazon CloudFront"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer needs to trigger a Lambda function in response to changes in an AWS service. Which AWS service provides event-driven architecture for triggering Lambda functions?",
    "options": {
      "A": "Amazon EventBridge",
      "B": "Amazon SNS",
      "C": "Amazon CloudWatch Events",
      "D": "Amazon SQS"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application requires a scalable message queue service for decoupling components and enabling asynchronous communication. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon SQS",
      "B": "Amazon SNS",
      "C": "Amazon MQ",
      "D": "Amazon Kinesis"
    },
    "correct_answer": "A"
  },
  {
    "question": "A developer needs to deploy a highly available relational database service on AWS with automated failover and backups. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon Aurora",
      "C": "Amazon DynamoDB",
      "D": "Amazon Redshift"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to process and analyze streaming data from various sources in real-time. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon Redshift",
      "B": "Amazon Athena",
      "C": "Amazon Kinesis",
      "D": "Amazon RDS"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer wants to ensure that web applications deployed on AWS can handle sudden traffic spikes without manual intervention. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon EC2 Auto Scaling",
      "B": "Amazon Route 53",
      "C": "Amazon ELB",
      "D": "Amazon CloudFront"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to store sensitive data in a highly secure manner on AWS. Which AWS service provides centralized management of encryption keys?",
    "options": {
      "A": "AWS KMS",
      "B": "Amazon S3",
      "C": "AWS Secrets Manager",
      "D": "AWS IAM"
    },
    "correct_answer": "A"
  },
  {
    "question": "A developer needs to monitor and debug applications running on AWS with distributed tracing and performance analysis. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon CloudWatch",
      "B": "Amazon Inspector",
      "C": "AWS X-Ray",
      "D": "AWS CloudTrail"
    },
    "correct_answer": "C"
  },
  {
    "question": "An application requires a managed NoSQL database service with low latency access and automated scaling. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon Redshift",
      "C": "Amazon DynamoDB",
      "D": "Amazon Aurora"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer needs to automate the deployment of code changes to AWS while maintaining control over the release process. Which AWS service provides continuous integration and continuous deployment capabilities?",
    "options": {
      "A": "AWS CodePipeline",
      "B": "AWS CodeCommit",
      "C": "AWS CodeDeploy",
      "D": "AWS CodeBuild"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to process large-scale data analytics with distributed queries and parallel processing. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon Athena",
      "B": "Amazon Redshift",
      "C": "Amazon EMR",
      "D": "Amazon RDS"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer needs to store and retrieve large files in a scalable and cost-effective manner on AWS. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon EBS",
      "B": "Amazon EFS",
      "C": "Amazon S3",
      "D": "Amazon Glacier"
    },
    "correct_answer": "C"
  },
  {
    "question": "An application needs to ensure that data is replicated across multiple AWS regions for disaster recovery. Which AWS service provides cross-region replication for data stored in S3 buckets?",
    "options": {
      "A": "Amazon Route 53",
      "B": "Amazon S3 Transfer Acceleration",
      "C": "Amazon S3 Cross-Region Replication",
      "D": "Amazon CloudFront"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer needs to trigger a Lambda function in response to changes in an AWS service. Which AWS service provides event-driven architecture for triggering Lambda functions?",
    "options": {
      "A": "Amazon EventBridge",
      "B": "Amazon SNS",
      "C": "Amazon CloudWatch Events",
      "D": "Amazon SQS"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application requires a scalable message queue service for decoupling components and enabling asynchronous communication. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon SQS",
      "B": "Amazon SNS",
      "C": "Amazon MQ",
      "D": "Amazon Kinesis"
    },
    "correct_answer": "A"
  },
  {
    "question": "A developer needs to deploy a highly available relational database service on AWS with automated failover and backups. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon Aurora",
      "C": "Amazon DynamoDB",
      "D": "Amazon Redshift"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to process and analyze streaming data from various sources in real-time. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon Redshift",
      "B": "Amazon Athena",
      "C": "Amazon Kinesis",
      "D": "Amazon RDS"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer wants to ensure that web applications deployed on AWS can handle sudden traffic spikes without manual intervention. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon EC2 Auto Scaling",
      "B": "Amazon Route 53",
      "C": "Amazon ELB",
      "D": "Amazon CloudFront"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to store sensitive data in a highly secure manner on AWS. Which AWS service provides centralized management of encryption keys?",
    "options": {
      "A": "AWS KMS",
      "B": "Amazon S3",
      "C": "AWS Secrets Manager",
      "D": "AWS IAM"
    },
    "correct_answer": "A"
  },
  {
    "question": "A developer needs to monitor and debug applications running on AWS with distributed tracing and performance analysis. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon CloudWatch",
      "B": "Amazon Inspector",
      "C": "AWS X-Ray",
      "D": "AWS CloudTrail"
    },
    "correct_answer": "C"
  },
  {
    "question": "An application requires a managed NoSQL database service with low latency access and automated scaling. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon RDS",
      "B": "Amazon Redshift",
      "C": "Amazon DynamoDB",
      "D": "Amazon Aurora"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer needs to automate the deployment of code changes to AWS while maintaining control over the release process. Which AWS service provides continuous integration and continuous deployment capabilities?",
    "options": {
      "A": "AWS CodePipeline",
      "B": "AWS CodeCommit",
      "C": "AWS CodeDeploy",
      "D": "AWS CodeBuild"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application needs to process large-scale data analytics with distributed queries and parallel processing. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon Athena",
      "B": "Amazon Redshift",
      "C": "Amazon EMR",
      "D": "Amazon RDS"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer needs to store and retrieve large files in a scalable and cost-effective manner on AWS. Which AWS service should the developer use?",
    "options": {
      "A": "Amazon EBS",
      "B": "Amazon EFS",
      "C": "Amazon S3",
      "D": "Amazon Glacier"
    },
    "correct_answer": "C"
  },
  {
    "question": "An application needs to ensure that data is replicated across multiple AWS regions for disaster recovery. Which AWS service provides cross-region replication for data stored in S3 buckets?",
    "options": {
      "A": "Amazon Route 53",
      "B": "Amazon S3 Transfer Acceleration",
      "C": "Amazon S3 Cross-Region Replication",
      "D": "Amazon CloudFront"
    },
    "correct_answer": "C"
  },
  {
    "question": "A developer needs to trigger a Lambda function in response to changes in an AWS service. Which AWS service provides event-driven architecture for triggering Lambda functions?",
    "options": {
      "A": "Amazon EventBridge",
      "B": "Amazon SNS",
      "C": "Amazon CloudWatch Events",
      "D": "Amazon SQS"
    },
    "correct_answer": "A"
  },
  {
    "question": "An application requires a scalable message queue service for decoupling components and enabling asynchronous communication. Which AWS service is best suited for this requirement?",
    "options": {
      "A": "Amazon SQS",
      "B": "Amazon SNS",
      "C": "Amazon MQ",
      "D": "Amazon Kinesis"
    },
    "correct_answer": "A"
  }
,


  {
    "question": "Your company wants to optimize costs for an application that requires occasional compute resources but needs to be highly available. Which AWS service should you use?",
    "option1": "Amazon EC2 Spot Instances",
    "option2": "Amazon EC2 On-Demand Instances",
    "option3": "AWS Lambda",
    "option4": "Amazon EBS",
    "ans": 1
  },
  {
    "question": "Which AWS service allows you to deploy and manage Docker containers at scale?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Lambda",
    "ans": 2
  },
  {
    "question": "Your application needs to store large amounts of unstructured data in the cloud. Which AWS service is best suited for this requirement?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "Amazon RDS",
    "option4": "Amazon DynamoDB",
    "ans": 1
  },
  {
    "question": "You want to restrict access to your AWS resources based on IP addresses. Which AWS service should you use?",
    "option1": "Amazon VPC",
    "option2": "Amazon CloudFront",
    "option3": "AWS IAM",
    "option4": "AWS WAF",
    "ans": 1
  },
  {
    "question": "Your application needs to process large amounts of data in real-time. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon S3",
    "option3": "Amazon Kinesis",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "Which AWS service can you use to create a fully managed relational database?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Your application needs to process messages asynchronously and reliably. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Which AWS service can you use to manage and deploy code changes across multiple environments?",
    "option1": "AWS CodeCommit",
    "option2": "AWS CodeDeploy",
    "option3": "AWS CodePipeline",
    "option4": "AWS CodeBuild",
    "ans": 3
  },
  {
    "question": "Your application needs to store session data for users. Which AWS service is best suited for this requirement?",
    "option1": "Amazon S3",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon ElastiCache",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "You want to monitor and manage AWS resources programmatically. Which AWS service should you use?",
    "option1": "Amazon CloudWatch",
    "option2": "Amazon CloudFront",
    "option3": "Amazon Inspector",
    "option4": "AWS Config",
    "ans": 1
  },
  {
    "question": "Your application needs to process events from various AWS services in real-time. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "AWS Lambda",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to run code without provisioning or managing servers?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Lambda",
    "ans": 4
  },
  {
    "question": "Your application needs to authenticate users and manage user identities securely. Which AWS service should you use?",
    "option1": "Amazon Cognito",
    "option2": "AWS IAM",
    "option3": "Amazon API Gateway",
    "option4": "Amazon SNS",
    "ans": 1
  },
  {
    "question": "Which AWS service can you use to automate the deployment of infrastructure as code (IaC)?",
    "option1": "Amazon EC2",
    "option2": "Amazon S3",
    "option3": "AWS CloudFormation",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "What AWS service can be used to monitor and collect logs from AWS resources and applications?",
    "option1": "Amazon CloudWatch",
    "option2": "Amazon SQS",
    "option3": "Amazon DynamoDB",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Which AWS service is designed to automatically scale based on demand for incoming web traffic?",
    "option1": "Amazon EC2",
    "option2": "AWS Lambda",
    "option3": "Amazon S3",
    "option4": "Amazon CloudFront",
    "ans": 4
  },
  {
    "question": "Your application requires a database service that is fully managed and offers both relational and non-relational database options. Which AWS service should you choose?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Which AWS service can be used to trigger functions in response to changes in data in other AWS services?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon EventBridge",
    "option4": "AWS Lambda",
    "ans": 3
  },
  {
    "question": "Your company needs to securely store and manage secrets, such as database passwords and API keys. Which AWS service provides a solution for this requirement?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "AWS IAM",
    "option4": "AWS Secrets Manager",
    "ans": 4
  },
  {
    "question": "Which AWS service can be used to distribute content globally with low latency?",
    "option1": "Amazon CloudFront",
    "option2": "Amazon S3",
    "option3": "Amazon EC2",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Your application needs to send notifications to users via email, SMS, or push notifications. Which AWS service can help you accomplish this?",
    "option1": "Amazon SES",
    "option2": "Amazon SNS",
    "option3": "Amazon SQS",
    "option4": "Amazon Pinpoint",
    "ans": 2
  },
  {
    "question": "Which AWS service allows you to deploy and manage Docker containers at scale?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Lambda",
    "ans": 2
  },
  {
    "question": "Your application needs to store large amounts of unstructured data in the cloud. Which AWS service is best suited for this requirement?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "Amazon RDS",
    "option4": "Amazon DynamoDB",
    "ans": 1
  },
  {
    "question": "You want to restrict access to your AWS resources based on IP addresses. Which AWS service should you use?",
    "option1": "Amazon VPC",
    "option2": "Amazon CloudFront",
    "option3": "AWS IAM",
    "option4": "AWS WAF",
    "ans": 1
  },
  {
    "question": "Your application needs to process large amounts of data in real-time. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon S3",
    "option3": "Amazon Kinesis",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "Which AWS service can you use to create a fully managed relational database?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Your application needs to process messages asynchronously and reliably. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Which AWS service can you use to manage and deploy code changes across multiple environments?",
    "option1": "AWS CodeCommit",
    "option2": "AWS CodeDeploy",
    "option3": "AWS CodePipeline",
    "option4": "AWS CodeBuild",
    "ans": 3
  },
  {
    "question": "Your application needs to store session data for users. Which AWS service is best suited for this requirement?",
    "option1": "Amazon S3",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon ElastiCache",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "You want to monitor and manage AWS resources programmatically. Which AWS service should you use?",
    "option1": "Amazon CloudWatch",
    "option2": "Amazon CloudFront",
    "option3": "Amazon Inspector",
    "option4": "AWS Config",
    "ans": 1
  },
  {
    "question": "Your application needs to process events from various AWS services in real-time. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "AWS Lambda",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to run code without provisioning or managing servers?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Lambda",
    "ans": 4
  },
  {
    "question": "Your application needs to authenticate users and manage user identities securely. Which AWS service should you use?",
    "option1": "Amazon Cognito",
    "option2": "AWS IAM",
    "option3": "Amazon API Gateway",
    "option4": "Amazon SNS",
    "ans": 1
  },
  {
    "question": "Which AWS service can you use to automate the deployment of infrastructure as code (IaC)?",
    "option1": "Amazon EC2",
    "option2": "Amazon S3",
    "option3": "AWS CloudFormation",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "What AWS service can be used to monitor and collect logs from AWS resources and applications?",
    "option1": "Amazon CloudWatch",
    "option2": "Amazon SQS",
    "option3": "Amazon DynamoDB",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Which AWS service is designed to automatically scale based on demand for incoming web traffic?",
    "option1": "Amazon EC2",
    "option2": "AWS Lambda",
    "option3": "Amazon S3",
    "option4": "Amazon CloudFront",
    "ans": 4
  },
  {
    "question": "Your application requires a database service that is fully managed and offers both relational and non-relational database options. Which AWS service should you choose?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Which AWS service can be used to trigger functions in response to changes in data in other AWS services?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon EventBridge",
    "option4": "AWS Lambda",
    "ans": 3
  },
  {
    "question": "Your company needs to securely store and manage secrets, such as database passwords and API keys. Which AWS service provides a solution for this requirement?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "AWS IAM",
    "option4": "AWS Secrets Manager",
    "ans": 4
  },
  {
    "question": "Which AWS service can be used to distribute content globally with low latency?",
    "option1": "Amazon CloudFront",
    "option2": "Amazon S3",
    "option3": "Amazon EC2",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Your application needs to send notifications to users via email, SMS, or push notifications. Which AWS service can help you accomplish this?",
    "option1": "Amazon SES",
    "option2": "Amazon SNS",
    "option3": "Amazon SQS",
    "option4": "Amazon Pinpoint",
    "ans": 2
  },
  {
    "question": "Which AWS service allows you to deploy and manage Docker containers at scale?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Lambda",
    "ans": 2
  },
  {
    "question": "Your application needs to store large amounts of unstructured data in the cloud. Which AWS service is best suited for this requirement?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "Amazon RDS",
    "option4": "Amazon DynamoDB",
    "ans": 1
  },
  {
    "question": "You want to restrict access to your AWS resources based on IP addresses. Which AWS service should you use?",
    "option1": "Amazon VPC",
    "option2": "Amazon CloudFront",
    "option3": "AWS IAM",
    "option4": "AWS WAF",
    "ans": 1
  },
  {
    "question": "Your application needs to process large amounts of data in real-time. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon S3",
    "option3": "Amazon Kinesis",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "Which AWS service can you use to create a fully managed relational database?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Your application needs to process messages asynchronously and reliably. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Which AWS service can you use to manage and deploy code changes across multiple environments?",
    "option1": "AWS CodeCommit",
    "option2": "AWS CodeDeploy",
    "option3": "AWS CodePipeline",
    "option4": "AWS CodeBuild",
    "ans": 3
  },
  {
    "question": "Your application needs to store session data for users. Which AWS service is best suited for this requirement?",
    "option1": "Amazon S3",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon ElastiCache",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "You want to monitor and manage AWS resources programmatically. Which AWS service should you use?",
    "option1": "Amazon CloudWatch",
    "option2": "Amazon CloudFront",
    "option3": "Amazon Inspector",
    "option4": "AWS Config",
    "ans": 1
  },
  {
    "question": "Your application needs to process events from various AWS services in real-time. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "AWS Lambda",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to run code without provisioning or managing servers?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Lambda",
    "ans": 4
  },
  {
    "question": "Your application needs to authenticate users and manage user identities securely. Which AWS service should you use?",
    "option1": "Amazon Cognito",
    "option2": "AWS IAM",
    "option3": "Amazon API Gateway",
    "option4": "Amazon SNS",
    "ans": 1
  },
  {
    "question": "Which AWS service can you use to automate the deployment of infrastructure as code (IaC)?",
    "option1": "Amazon EC2",
    "option2": "Amazon S3",
    "option3": "AWS CloudFormation",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "What AWS service can be used to monitor and collect logs from AWS resources and applications?",
    "option1": "Amazon CloudWatch",
    "option2": "Amazon SQS",
    "option3": "Amazon DynamoDB",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Which AWS service is designed to automatically scale based on demand for incoming web traffic?",
    "option1": "Amazon EC2",
    "option2": "AWS Lambda",
    "option3": "Amazon S3",
    "option4": "Amazon CloudFront",
    "ans": 4
  },
  {
    "question": "Your application requires a database service that is fully managed and offers both relational and non-relational database options. Which AWS service should you choose?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Which AWS service can be used to trigger functions in response to changes in data in other AWS services?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon EventBridge",
    "option4": "AWS Lambda",
    "ans": 3
  },
  {
    "question": "Your company needs to securely store and manage secrets, such as database passwords and API keys. Which AWS service provides a solution for this requirement?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "AWS IAM",
    "option4": "AWS Secrets Manager",
    "ans": 4
  },
  {
    "question": "Which AWS service can be used to distribute content globally with low latency?",
    "option1": "Amazon CloudFront",
    "option2": "Amazon S3",
    "option3": "Amazon EC2",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Your application needs to send notifications to users via email, SMS, or push notifications. Which AWS service can help you accomplish this?",
    "option1": "Amazon SES",
    "option2": "Amazon SNS",
    "option3": "Amazon SQS",
    "option4": "Amazon Pinpoint",
    "ans": 2
  },
  {
    "question": "Which AWS service allows you to deploy and manage Docker containers at scale?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Lambda",
    "ans": 2
  },
  {
    "question": "Your application needs to store large amounts of unstructured data in the cloud. Which AWS service is best suited for this requirement?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "Amazon RDS",
    "option4": "Amazon DynamoDB",
    "ans": 1
  },
  {
    "question": "You want to restrict access to your AWS resources based on IP addresses. Which AWS service should you use?",
    "option1": "Amazon VPC",
    "option2": "Amazon CloudFront",
    "option3": "AWS IAM",
    "option4": "AWS WAF",
    "ans": 1
  },
  {
    "question": "Your application needs to process large amounts of data in real-time. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon S3",
    "option3": "Amazon Kinesis",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "Which AWS service can you use to create a fully managed relational database?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Your application needs to process messages asynchronously and reliably. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Which AWS service can you use to manage and deploy code changes across multiple environments?",
    "option1": "AWS CodeCommit",
    "option2": "AWS CodeDeploy",
    "option3": "AWS CodePipeline",
    "option4": "AWS CodeBuild",
    "ans": 3
  },
  {
    "question": "Your application needs to store session data for users. Which AWS service is best suited for this requirement?",
    "option1": "Amazon S3",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon ElastiCache",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "You want to monitor and manage AWS resources programmatically. Which AWS service should you use?",
    "option1": "Amazon CloudWatch",
    "option2": "Amazon CloudFront",
    "option3": "Amazon Inspector",
    "option4": "AWS Config",
    "ans": 1
  },
  {
    "question": "Your application needs to process events from various AWS services in real-time. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "AWS Lambda",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to run code without provisioning or managing servers?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Lambda",
    "ans": 4
  },
  {
    "question": "Your application needs to authenticate users and manage user identities securely. Which AWS service should you use?",
    "option1": "Amazon Cognito",
    "option2": "AWS IAM",
    "option3": "Amazon API Gateway",
    "option4": "Amazon SNS",
    "ans": 1
  },
  {
    "question": "Which AWS service can you use to automate the deployment of infrastructure as code (IaC)?",
    "option1": "Amazon EC2",
    "option2": "Amazon S3",
    "option3": "AWS CloudFormation",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "What AWS service can be used to monitor and collect logs from AWS resources and applications?",
    "option1": "Amazon CloudWatch",
    "option2": "Amazon SQS",
    "option3": "Amazon DynamoDB",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Which AWS service is designed to automatically scale based on demand for incoming web traffic?",
    "option1": "Amazon EC2",
    "option2": "AWS Lambda",
    "option3": "Amazon S3",
    "option4": "Amazon CloudFront",
    "ans": 4
  },
  {
    "question": "Your application requires a database service that is fully managed and offers both relational and non-relational database options. Which AWS service should you choose?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Which AWS service can be used to trigger functions in response to changes in data in other AWS services?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon EventBridge",
    "option4": "AWS Lambda",
    "ans": 3
  },
  {
    "question": "Your company needs to securely store and manage secrets, such as database passwords and API keys. Which AWS service provides a solution for this requirement?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "AWS IAM",
    "option4": "AWS Secrets Manager",
    "ans": 4
  },
  {
    "question": "Which AWS service can be used to distribute content globally with low latency?",
    "option1": "Amazon CloudFront",
    "option2": "Amazon S3",
    "option3": "Amazon EC2",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Your application needs to send notifications to users via email, SMS, or push notifications. Which AWS service can help you accomplish this?",
    "option1": "Amazon SES",
    "option2": "Amazon SNS",
    "option3": "Amazon SQS",
    "option4": "Amazon Pinpoint",
    "ans": 2
  },
  

  {
    "question": "Your application requires a scalable and fully managed messaging service for publishing and subscribing to messages. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "AWS Lambda",
    "ans": 2
  },
  {
    "question": "Which AWS service provides fully managed file storage that is accessible from multiple EC2 instances?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "Amazon EFS",
    "option4": "AWS Storage Gateway",
    "ans": 3
  },
  {
    "question": "Your application needs to process data in real-time and make decisions based on that data. Which AWS service is suitable for this requirement?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to run containerized applications on a serverless platform?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Fargate",
    "ans": 4
  },
  {
    "question": "Your company wants to automate the process of deploying code to EC2 instances. Which AWS service should you use?",
    "option1": "AWS CodeCommit",
    "option2": "AWS CodeDeploy",
    "option3": "AWS CodePipeline",
    "option4": "AWS CodeBuild",
    "ans": 2
  },
  {
    "question": "Which AWS service provides a fully managed NoSQL database?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 2
  },
  {
    "question": "Your application needs to store and retrieve data using SQL queries with minimal setup and management. Which AWS service should you use?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Which AWS service allows you to create and manage a virtual private cloud (VPC)?",
    "option1": "Amazon EC2",
    "option2": "Amazon VPC",
    "option3": "Amazon Route 53",
    "option4": "Amazon RDS",
    "ans": 2
  },
  {
    "question": "Your application needs to store user sessions in a managed, scalable, and distributed cache. Which AWS service should you use?",
    "option1": "Amazon ElastiCache",
    "option2": "Amazon S3",
    "option3": "Amazon RDS",
    "option4": "Amazon DynamoDB",
    "ans": 1
  },
  {
    "question": "Which AWS service allows you to deploy serverless applications?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Lambda",
    "ans": 4
  },
  {
    "question": "Your company wants to implement a disaster recovery solution for its on-premises data center. Which AWS service can help you accomplish this?",
    "option1": "AWS Storage Gateway",
    "option2": "AWS Snowball",
    "option3": "Amazon VPC",
    "option4": "AWS Direct Connect",
    "ans": 1
  },
  {
    "question": "Which AWS service provides scalable, low-latency storage for frequently accessed data?",
    "option1": "Amazon S3 Glacier",
    "option2": "Amazon S3 Standard",
    "option3": "Amazon EBS",
    "option4": "Amazon EFS",
    "ans": 2
  },
  {
    "question": "Your application needs to trigger AWS Lambda functions in response to events from various AWS services. Which AWS service can help you accomplish this?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon EventBridge",
    "option4": "Amazon Kinesis",
    "ans": 3
  },
  {
    "question": "Which AWS service provides fully managed relational databases optimized for memory, performance, and availability?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 4
  },
  {
    "question": "Your application needs to process large volumes of data using parallel processing techniques. Which AWS service is suitable for this requirement?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to run code in response to HTTP requests using serverless functions?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon API Gateway",
    "option4": "AWS Lambda",
    "ans": 4
  },
  {
    "question": "Your company wants to ensure that data transferred between AWS services and your on-premises data center is encrypted. Which AWS service can help you accomplish this?",
    "option1": "Amazon VPC",
    "option2": "AWS Direct Connect",
    "option3": "Amazon Route 53",
    "option4": "AWS Certificate Manager",
    "ans": 2
  },
  {
    "question": "Which AWS service provides fully managed, highly scalable file storage for use with on-premises servers?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "Amazon EFS",
    "option4": "AWS Storage Gateway",
    "ans": 4
  },
  {
    "question": "Your application needs to process and analyze streaming data in real-time. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to create a private network connection between your data center and AWS?",
    "option1": "Amazon VPC",
    "option2": "AWS Direct Connect",
    "option3": "Amazon Route 53",
    "option4": "Amazon CloudFront",
    "ans": 2
  },
  {
    "question": "Your company wants to securely authenticate users and control access to AWS resources. Which AWS service should you use?",
    "option1": "Amazon Cognito",
    "option2": "AWS IAM",
    "option3": "Amazon API Gateway",
    "option4": "Amazon SNS",
    "ans": 2
  },
  {
    "question": "Which AWS service provides a fully managed container orchestration service?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Lambda",
    "ans": 3
  },
  {
    "question": "Your application needs to process messages reliably and in order. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Which AWS service provides a fully managed relational database that is compatible with MySQL and PostgreSQL?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 4
  },
  {
    "question": "Your application needs to process and analyze large volumes of data stored in S3. Which AWS service can help you accomplish this?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 1
  },
  {
    "question": "Which AWS service provides a fully managed streaming data service for real-time analytics?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Your company needs to transfer large amounts of data to AWS. Which AWS service provides a physical device to accomplish this?",
    "option1": "Amazon Snowball",
    "option2": "Amazon VPC",
    "option3": "AWS Direct Connect",
    "option4": "Amazon Route 53",
    "ans": 1
  },
  {
    "question": "Which AWS service provides a fully managed, highly available, and scalable search service?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Elasticsearch Service",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Your application needs to deploy code changes automatically whenever there's a commit to your Git repository. Which AWS service should you use?",
    "option1": "AWS CodeCommit",
    "option2": "AWS CodeDeploy",
    "option3": "AWS CodePipeline",
    "option4": "AWS CodeBuild",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to create a scalable DNS web service?",
    "option1": "Amazon VPC",
    "option2": "Amazon Route 53",
    "option3": "AWS Direct Connect",
    "option4": "Amazon CloudFront",
    "ans": 2
  },
  {
    "question": "Your company wants to deploy a website that can handle large traffic spikes without manual intervention. Which AWS service should you use?",
    "option1": "Amazon EC2",
    "option2": "AWS Lambda",
    "option3": "Amazon S3",
    "option4": "Amazon CloudFront",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to build serverless applications using simple drag-and-drop components?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Step Functions",
    "ans": 4
  },
  {
    "question": "Your application needs to manage and analyze large datasets using distributed computing. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 2
  },
  {
    "question": "Which AWS service provides fully managed Kafka clusters?",
    "option1": "Amazon MSK",
    "option2": "Amazon Kinesis",
    "option3": "Amazon SQS",
    "option4": "Amazon SNS",
    "ans": 1
  },
  {
    "question": "Your company needs to securely control access to AWS resources for multiple users and services. Which AWS service should you use?",
    "option1": "Amazon Cognito",
    "option2": "AWS IAM",
    "option3": "Amazon API Gateway",
    "option4": "Amazon SNS",
    "ans": 2
  },
  {
    "question": "Which AWS service provides a scalable, managed, and highly available database service for applications that require consistent, single-digit millisecond latency?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 2
  },
  {
    "question": "Your application needs to process data in real-time and generate alerts based on predefined thresholds. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Which AWS service provides a scalable object storage service for use with applications hosted on AWS?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "Amazon RDS",
    "option4": "Amazon DynamoDB",
    "ans": 1
  },
  {
    "question": "Your company wants to set up a data warehouse to analyze large datasets. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to collect, process, and analyze large volumes of data from multiple sources?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 2
  },
  {
    "question": "Your application needs to send emails to customers using a scalable and cost-effective email service. Which AWS service should you use?",
    "option1": "Amazon SES",
    "option2": "Amazon SNS",
    "option3": "Amazon SQS",
    "option4": "Amazon Pinpoint",
    "ans": 1
  },
  {
    "question": "Which AWS service provides a fully managed, serverless data integration service that makes it easy to move data between different data stores?",
    "option1": "AWS Glue",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 1
  },
  {
    "question": "Your company needs to collect, process, and analyze streaming data in real-time. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to create and manage virtual servers in the cloud?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Your application needs to send SMS messages to customers. Which AWS service should you use?",
    "option1": "Amazon SES",
    "option2": "Amazon SNS",
    "option3": "Amazon SQS",
    "option4": "Amazon Pinpoint",
    "ans": 4
  },
  {
    "question": "Which AWS service provides a scalable, fully managed data warehouse service that is optimized for petabyte-scale analytics?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 4
  },
  {
    "question": "Your application needs to execute code in response to HTTP requests and automatically scale to handle the load. Which AWS service should you use?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon API Gateway",
    "option4": "AWS Lambda",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to create and manage relational databases in the cloud?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Your company wants to set up a scalable messaging service for sending email and SMS messages to customers. Which AWS service should you use?",
    "option1": "Amazon SES",
    "option2": "Amazon SNS",
    "option3": "Amazon SQS",
    "option4": "Amazon Pinpoint",
    "ans": 4
  },
  {
    "question": "Which AWS service provides a fully managed graph database service?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Neptune",
    "option4": "Amazon Aurora",
    "ans": 3
  },
  {
    "question": "Your application needs to store and retrieve data using a fully managed, serverless database. Which AWS service should you use?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora Serverless",
    "ans": 4
  },
  {
    "question": "Which AWS service provides a fully managed in-memory data store service?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon ElastiCache",
    "option4": "Amazon Aurora",
    "ans": 3
  },
  {
    "question": "Your company wants to create a virtual private network (VPN) connection between your corporate network and AWS. Which AWS service should you use?",
    "option1": "Amazon VPC",
    "option2": "AWS Direct Connect",
    "option3": "Amazon Route 53",
    "option4": "Amazon CloudFront",
    "ans": 2
  },
  {
    "question": "Which AWS service allows you to create, run, and manage Docker containers on a cluster of EC2 instances?",
    "option1": "Amazon ECS",
    "option2": "Amazon EKS",
    "option3": "AWS Fargate",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Your application needs to deploy code changes automatically whenever there's a commit to your Git repository. Which AWS service should you use?",
    "option1": "AWS CodeCommit",
    "option2": "AWS CodeDeploy",
    "option3": "AWS CodePipeline",
    "option4": "AWS CodeBuild",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to create and manage scalable virtual servers in the cloud?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Lambda",
    "ans": 1
  },
  {
    "question": "Your application needs to analyze logs generated by AWS services and applications. Which AWS service should you use?",
    "option1": "Amazon CloudWatch",
    "option2": "Amazon CloudFront",
    "option3": "Amazon Inspector",
    "option4": "AWS Config",
    "ans": 1
  },
  {
    "question": "Which AWS service allows you to create and manage virtual private networks (VPNs) in the cloud?",
    "option1": "Amazon EC2",
    "option2": "Amazon VPC",
    "option3": "Amazon Route 53",
    "option4": "Amazon RDS",
    "ans": 2
  },
  {
    "question": "Your company wants to automate the process of creating, updating, and deleting AWS resources. Which AWS service should you use?",
    "option1": "Amazon EC2",
    "option2": "Amazon S3",
    "option3": "AWS CloudFormation",
    "option4": "Amazon RDS",
    "ans": 3
  },
  {
    "question": "Which AWS service provides a fully managed service for deploying and managing machine learning models?",
    "option1": "Amazon SageMaker",
    "option2": "Amazon Comprehend",
    "option3": "Amazon Polly",
    "option4": "Amazon Rekognition",
    "ans": 1
  },
  {
    "question": "Your application needs to process streaming data in real-time using SQL queries. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to create and manage scalable relational databases in the cloud?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Your application needs to analyze large volumes of data stored in S3 using SQL queries. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 1
  },
  {
    "question": "Which AWS service provides a fully managed, highly available, and scalable search service?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Elasticsearch Service",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Your application needs to deploy code changes automatically whenever there's a commit to your Git repository. Which AWS service should you use?",
    "option1": "AWS CodeCommit",
    "option2": "AWS CodeDeploy",
    "option3": "AWS CodePipeline",
    "option4": "AWS CodeBuild",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to create a scalable DNS web service?",
    "option1": "Amazon VPC",
    "option2": "Amazon Route 53",
    "option3": "AWS Direct Connect",
    "option4": "Amazon CloudFront",
    "ans": 2
  },
  {
    "question": "Your company wants to deploy a website that can handle large traffic spikes without manual intervention. Which AWS service should you use?",
    "option1": "Amazon EC2",
    "option2": "AWS Lambda",
    "option3": "Amazon S3",
    "option4": "Amazon CloudFront",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to build serverless applications using simple drag-and-drop components?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Step Functions",
    "ans": 4
  },
  {
    "question": "Your application needs to manage and analyze large datasets using distributed computing. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 2
  },
  {
    "question": "Which AWS service provides fully managed Kafka clusters?",
    "option1": "Amazon MSK",
    "option2": "Amazon Kinesis",
    "option3": "Amazon SQS",
    "option4": "Amazon SNS",
    "ans": 1
  },
  {
    "question": "Your company needs to securely control access to AWS resources for multiple users and services. Which AWS service should you use?",
    "option1": "Amazon Cognito",
    "option2": "AWS IAM",
    "option3": "Amazon API Gateway",
    "option4": "Amazon SNS",
    "ans": 2
  },
  {
    "question": "Which AWS service provides a scalable, managed, and highly available database service for applications that require consistent, single-digit millisecond latency?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 2
  },
  {
    "question": "Your application needs to process data in real-time and generate alerts based on predefined thresholds. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Which AWS service provides a scalable object storage service for use with applications hosted on AWS?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "Amazon RDS",
    "option4": "Amazon DynamoDB",
    "ans": 1
  },
  {
    "question": "Your company wants to set up a data warehouse to analyze large datasets. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to collect, process, and analyze large volumes of data from multiple sources?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 2
  },
  {
    "question": "Your application needs to send emails to customers using a scalable and cost-effective email service. Which AWS service should you use?",
    "option1": "Amazon SES",
    "option2": "Amazon SNS",
    "option3": "Amazon SQS",
    "option4": "Amazon Pinpoint",
    "ans": 1
  },
  {
    "question": "Which AWS service provides a fully managed service for deploying and managing machine learning models?",
    "option1": "Amazon SageMaker",
    "option2": "Amazon Comprehend",
    "option3": "Amazon Polly",
    "option4": "Amazon Rekognition",
    "ans": 1
  },
  {
    "question": "Your application needs to process streaming data in real-time using SQL queries. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to create and manage scalable relational databases in the cloud?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Your application needs to analyze large volumes of data stored in S3 using SQL queries. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 1
  },
  {
    "question": "Which AWS service provides a fully managed, highly available, and scalable search service?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Elasticsearch Service",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Your application needs to deploy code changes automatically whenever there's a commit to your Git repository. Which AWS service should you use?",
    "option1": "AWS CodeCommit",
    "option2": "AWS CodeDeploy",
    "option3": "AWS CodePipeline",
    "option4": "AWS CodeBuild",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to create a scalable DNS web service?",
    "option1": "Amazon VPC",
    "option2": "Amazon Route 53",
    "option3": "AWS Direct Connect",
    "option4": "Amazon CloudFront",
    "ans": 2
  },
  {
    "question": "Your company wants to deploy a website that can handle large traffic spikes without manual intervention. Which AWS service should you use?",
    "option1": "Amazon EC2",
    "option2": "AWS Lambda",
    "option3": "Amazon S3",
    "option4": "Amazon CloudFront",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to build serverless applications using simple drag-and-drop components?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Step Functions",
    "ans": 4
  },
  {
    "question": "Your application needs to manage and analyze large datasets using distributed computing. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 2
  },
  {
    "question": "Which AWS service provides fully managed Kafka clusters?",
    "option1": "Amazon MSK",
    "option2": "Amazon Kinesis",
    "option3": "Amazon SQS",
    "option4": "Amazon SNS",
    "ans": 1
  },
  {
    "question": "Your company needs to securely control access to AWS resources for multiple users and services. Which AWS service should you use?",
    "option1": "Amazon Cognito",
    "option2": "AWS IAM",
    "option3": "Amazon API Gateway",
    "option4": "Amazon SNS",
    "ans": 2
  },
  {
    "question": "Which AWS service provides a scalable, managed, and highly available database service for applications that require consistent, single-digit millisecond latency?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 2
  },
  {
    "question": "Your application needs to process data in real-time and generate alerts based on predefined thresholds. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Which AWS service provides a scalable object storage service for use with applications hosted on AWS?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "Amazon RDS",
    "option4": "Amazon DynamoDB",
    "ans": 1
  },
  {
    "question": "Your company wants to set up a data warehouse to analyze large datasets. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to collect, process, and analyze large volumes of data from multiple sources?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 2
  },
  {
    "question": "Your application needs to send emails to customers using a scalable and cost-effective email service. Which AWS service should you use?",
    "option1": "Amazon SES",
    "option2": "Amazon SNS",
    "option3": "Amazon SQS",
    "option4": "Amazon Pinpoint",
    "ans": 1
  },
  {
    "question": "Which AWS service provides a fully managed service for deploying and managing machine learning models?",
    "option1": "Amazon SageMaker",
    "option2": "Amazon Comprehend",
    "option3": "Amazon Polly",
    "option4": "Amazon Rekognition",
    "ans": 1
  },
  {
    "question": "Your application needs to process streaming data in real-time using SQL queries. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to create and manage scalable relational databases in the cloud?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Your application needs to analyze large volumes of data stored in S3 using SQL queries. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 1
  },
  {
    "question": "Which AWS service provides a fully managed, highly available, and scalable search service?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Elasticsearch Service",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Your application needs to deploy code changes automatically whenever there's a commit to your Git repository. Which AWS service should you use?",
    "option1": "AWS CodeCommit",
    "option2": "AWS CodeDeploy",
    "option3": "AWS CodePipeline",
    "option4": "AWS CodeBuild",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to create a scalable DNS web service?",
    "option1": "Amazon VPC",
    "option2": "Amazon Route 53",
    "option3": "AWS Direct Connect",
    "option4": "Amazon CloudFront",
    "ans": 2
  },
  {
    "question": "Your company wants to deploy a website that can handle large traffic spikes without manual intervention. Which AWS service should you use?",
    "option1": "Amazon EC2",
    "option2": "AWS Lambda",
    "option3": "Amazon S3",
    "option4": "Amazon CloudFront",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to build serverless applications using simple drag-and-drop components?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Step Functions",
    "ans": 4
  },
  {
    "question": "Your application needs to manage and analyze large datasets using distributed computing. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 2
  },
  {
    "question": "Which AWS service provides fully managed Kafka clusters?",
    "option1": "Amazon MSK",
    "option2": "Amazon Kinesis",
    "option3": "Amazon SQS",
    "option4": "Amazon SNS",
    "ans": 1
  },
  {
    "question": "Your company needs to securely control access to AWS resources for multiple users and services. Which AWS service should you use?",
    "option1": "Amazon Cognito",
    "option2": "AWS IAM",
    "option3": "Amazon API Gateway",
    "option4": "Amazon SNS",
    "ans": 2
  },
  {
    "question": "Which AWS service provides a scalable, managed, and highly available database service for applications that require consistent, single-digit millisecond latency?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 2
  },
  {
    "question": "Your application needs to process data in real-time and generate alerts based on predefined thresholds. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Which AWS service provides a scalable object storage service for use with applications hosted on AWS?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "Amazon RDS",
    "option4": "Amazon DynamoDB",
    "ans": 1
  },
  {
    "question": "Your company wants to set up a data warehouse to analyze large datasets. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to collect, process, and analyze large volumes of data from multiple sources?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 2
  },
  {
    "question": "Your application needs to send emails to customers using a scalable and cost-effective email service. Which AWS service should you use?",
    "option1": "Amazon SES",
    "option2": "Amazon SNS",
    "option3": "Amazon SQS",
    "option4": "Amazon Pinpoint",
    "ans": 1
  },
  {
    "question": "Which AWS service provides a fully managed service for deploying and managing machine learning models?",
    "option1": "Amazon SageMaker",
    "option2": "Amazon Comprehend",
    "option3": "Amazon Polly",
    "option4": "Amazon Rekognition",
    "ans": 1
  },
  {
    "question": "Your application needs to process streaming data in real-time using SQL queries. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to create and manage scalable relational databases in the cloud?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 1
  },
  {
    "question": "Your application needs to analyze large volumes of data stored in S3 using SQL queries. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 1
  },
  {
    "question": "Which AWS service provides a fully managed, highly available, and scalable search service?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Elasticsearch Service",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Your application needs to deploy code changes automatically whenever there's a commit to your Git repository. Which AWS service should you use?",
    "option1": "AWS CodeCommit",
    "option2": "AWS CodeDeploy",
    "option3": "AWS CodePipeline",
    "option4": "AWS CodeBuild",
    "ans": 3
  },
  {
    "question": "Which AWS service allows you to create a scalable DNS web service?",
    "option1": "Amazon VPC",
    "option2": "Amazon Route 53",
    "option3": "AWS Direct Connect",
    "option4": "Amazon CloudFront",
    "ans": 2
  },
  {
    "question": "Your company wants to deploy a website that can handle large traffic spikes without manual intervention. Which AWS service should you use?",
    "option1": "Amazon EC2",
    "option2": "AWS Lambda",
    "option3": "Amazon S3",
    "option4": "Amazon CloudFront",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to build serverless applications using simple drag-and-drop components?",
    "option1": "Amazon EC2",
    "option2": "Amazon ECS",
    "option3": "Amazon EKS",
    "option4": "AWS Step Functions",
    "ans": 4
  },
  {
    "question": "Your application needs to manage and analyze large datasets using distributed computing. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 2
  },
  {
    "question": "Which AWS service provides fully managed Kafka clusters?",
    "option1": "Amazon MSK",
    "option2": "Amazon Kinesis",
    "option3": "Amazon SQS",
    "option4": "Amazon SNS",
    "ans": 1
  },
  {
    "question": "Your company needs to securely control access to AWS resources for multiple users and services. Which AWS service should you use?",
    "option1": "Amazon Cognito",
    "option2": "AWS IAM",
    "option3": "Amazon API Gateway",
    "option4": "Amazon SNS",
    "ans": 2
  },
  {
    "question": "Which AWS service provides a scalable, managed, and highly available database service for applications that require consistent, single-digit millisecond latency?",
    "option1": "Amazon RDS",
    "option2": "Amazon DynamoDB",
    "option3": "Amazon Redshift",
    "option4": "Amazon Aurora",
    "ans": 2
  },
  {
    "question": "Your application needs to process data in real-time and generate alerts based on predefined thresholds. Which AWS service should you use?",
    "option1": "Amazon SQS",
    "option2": "Amazon SNS",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 3
  },
  {
    "question": "Which AWS service provides a scalable object storage service for use with applications hosted on AWS?",
    "option1": "Amazon S3",
    "option2": "Amazon EBS",
    "option3": "Amazon RDS",
    "option4": "Amazon DynamoDB",
    "ans": 1
  },
  {
    "question": "Your company wants to set up a data warehouse to analyze large datasets. Which AWS service should you use?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 4
  },
  {
    "question": "Which AWS service allows you to collect, process, and analyze large volumes of data from multiple sources?",
    "option1": "Amazon Athena",
    "option2": "Amazon EMR",
    "option3": "Amazon Kinesis",
    "option4": "Amazon Redshift",
    "ans": 2
  },
  {
    "question": "Your application needs to send emails to customers using a scalable and cost-effective email service. Which AWS service should you use?",
    "option1": "Amazon SES",
    "option2": "Amazon SNS",
    "option3": "Amazon SQS",
    "option4": "Amazon Pinpoint",
    "ans": 1
  },
  {
    "question": "Which AWS service provides a fully managed service for deploying and managing machine learning models?",
    "option1": "Amazon SageMaker",
    "option2": "Amazon Comprehend",
    "option3": "Amazon Polly",
    "option4": "Amazon Rekognition",
    "ans": 1
  }




  ]
