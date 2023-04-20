FROM maven:3.8.1-openjdk-17-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package


FROM openjdk:17.0.1-jdk-slim
COPY --from=build /home/app/target/bloggergate.jar /usr/local/lib/bloggergate.jar
ENTRYPOINT ["java","-jar","/usr/local/lib/bloggergate.jar"]