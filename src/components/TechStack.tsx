import { motion } from "framer-motion";
import '../assets/styles/TechStack.scss';

const categories = [
  {
    title: "Cloud Technology",
    items: [
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", link: "https://azure.microsoft.com" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", link: "https://aws.amazon.com" },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", link: "https://cloud.google.com" },
      { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg", link: "https://www.digitalocean.com" },
    ],
  },
  {
    title: "DevOps Tools",
    items: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", link: "https://www.docker.com" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", link: "https://kubernetes.io" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", link: "https://www.jenkins.io" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", link: "https://git-scm.com" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", link: "https://github.com" },
      { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", link: "https://gitlab.com" },
      { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg", link: "https://bitbucket.org" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", link: "https://www.terraform.io" },
      { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", link: "https://www.ansible.com" },
      { name: "Puppet", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppet/puppet-original.svg", link: "https://puppet.com" },
      { name: "Chef", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chef/chef-original.svg", link: "https://www.chef.io" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", link: "https://react.dev" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", link: "https://www.typescriptlang.org" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", link: "https://getbootstrap.com" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", link: "https://nodejs.org" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", link: "https://expressjs.com" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", link: "https://nextjs.org" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", link: "https://www.djangoproject.com" },
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", link: "https://go.dev" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", link: "https://www.postman.com" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", link: "https://firebase.google.com" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", link: "https://www.mysql.com" },
      { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg", link: "https://stripe.com" },
      { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg", link: "https://www.cloudflare.com" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="techstack">
      <h2 className="tech-stack__title">TechStack</h2>
      <div className="tech-stack__grid">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            className="tech-stack__category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="tech-stack__category-title">{category.title}</h3>
            <div className="tech-stack__items">
              {category.items.map((tool, i) => (
                <motion.a
                  key={i}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-stack__item"
                  whileHover={{ scale: 1.15 }}
                >
                  <img src={tool.icon} alt={tool.name} className="tech-stack__icon" />
                  <span className="tech-stack__name">{tool.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
