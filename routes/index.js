var express = require('express');
var router = express.Router();


const itemList = [
  {'id': '#', 'title': 'Term', 'description': 'Definition' },
  {'id': 1, 'title': 'Bootstrapping', 'description': 'Bootstrapping is defined as the circumstance where an individual or an entrepreneur starts a business venture with little to no money from investors [1]' },
  {'id': 2, 'title': 'Kubernetes', 'description': 'Kubernetes is an open-source platform used to automate the deployment, scaling, and management of containerised applications in a scalable and distributed manner [2].' },
  {'id': 3, 'title': 'Terraform', 'description': 'Terraform is an open-source infrastructure as code tool which enables users to provision infrastructure resources, like virtual machines, networks, and storage. This facilitates the management and automation of cloud infrastructure deployments [3].' },
  {'id': 4, 'title': 'Docker', 'description': 'Docker is an open-source platform which allows developers to automate the packaging, distribution, and deployment of applications and their dependencies into portable containers, providing an isolated environment [4].' },
  {'id': 5, 'title': 'Microservices', 'description': 'Microservices are the result of applications being divided into a collection of small, loosely coupled, and independently deployable services. Each service focuses on a specific business capability, this enables scalability, flexibility, and easier maintenance of complex applications [5].' },
  {'id': 6, 'title': 'DevSecOps', 'description': 'DevSecOps is short for Development, Security, and Operations. It is an approach to software development and delivery that emphasises security integration practices and considerations throughout the software development lifecycle. It allows collaboration between development, security, and operation teams to address vulnerabilities, automate security checks, and promote a culture of shared responsibility for security [6]. ' },
  {'id': 7, 'title': 'Change Failure rate', 'description': 'Change Failure Rate (CFR) refers to the percentage of changes or deployments within a system or software environment that result in failure or negative outcomes. It is a metric used to measure the reliability and success of implementing changes, updates, or new features. A high change failure rate may indicate a higher risk of failures and suggest the need for improvement in the change management process [7].' },
  {'id': 8, 'title': 'Siloed Communication', 'description': 'Siloed communication refers to the situation where information and communication within an organisation are restricted to specific departments, teams, or individuals, this hinders the flow of information across various areas. When producing products this can lead to a lack of collaboration, poor coordination, and limited sharing of knowledge between stakeholders [8]. ' },
  {'id': 9, 'title': 'Agile', 'description': 'Agile is an iterative approach to software development. It emphasises flexibility, collaboration, and adaptability. It involves the delivery of working software in short iterations or time periods, which prioritises customer satisfaction, and empowers self-organising teams. Agile methodologies can enable businesses to be responsive, efficient, and better equipped to meet changing customer needs [9].' },
  {'id': 10, 'title': 'Lead Time for Changes', 'description': 'Lead time for change refers to the duration it takes to implement and deliver a change in a software development operations environment. It measures the time from the initiation of a change request to its deployment and availability in a production environment. It is a crucial metric for assessing the efficiency and effectiveness of change management processes, it provides an insight into the ability of an organisation to deliver changes and updates to systems or software applications [7].' },
/*  {'id': 11, 'title': 'Heading 1', 'description': 'This is a description fo the work' },
  {'id': 12, 'title': 'Heading 1', 'description': 'This is a description fo the work' },
  {'id': 13, 'title': 'Heading 1', 'description': 'This is a description of the work' },
  {'id': 14, 'title': 'Heading 1', 'description': 'This is a description fo the work' },
  {'id': 15, 'title': 'Heading 1', 'description': 'This is a description fo the work' },
  {'id': 16, 'title': 'Heading 1', 'description': 'This is a description fo the work' },
  {'id': 17, 'title': 'Heading 1', 'description': 'This is a description of the work' },
  {'id': 18, 'title': 'Heading 1', 'description': 'This is a description fo the work' },
  {'id': 19, 'title': 'Heading 1', 'description': 'This is a description fo the work' },
  {'id': 20, 'title': 'Heading 1', 'description': 'This is a description fo the work' },
  */ 
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Glossary', subheading: 'Glossary part 1/5', subheading1: 'Reference List', items: itemList });
});

module.exports = router;
