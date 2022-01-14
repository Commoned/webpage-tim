FROM registry.redhat.io/rhscl/httpd-24-rhel7@sha256:ed835f1a45efb7dfd62894274692f494ddbf83d1072019ecafc040574cce5886
COPY ./ /usr/local/apache2/htdocs

RUN httpd
