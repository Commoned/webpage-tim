FROM rhscl/s2i-core-rhel7:1

COPY ./ /usr/local/apache2/htdocs

RUN httpd
