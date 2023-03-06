<script setup>
import avatar1 from '@images/avatars/avatar-14.png'

const accountData = {
  avatarImg: avatar1,
  firstName: 'Hristo',
  lastName: 'Dimitrov',
  email: 'reactorsec@protonmail.com',
  phone: '+359 884023112',
}

const accountDataLocal = ref(structuredClone(accountData))
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard 
        max-width="1200"
      >
        <VCardText class="d-flex">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            size="100"
            class="me-6"
            :image="accountDataLocal.avatarImg"
          />
          <div>
            <h2>Hristo Dimitrov</h2>
            <p>${JavaScript Developer}</p>
          </div>
        </VCardText>

        <VDivider />
        <VCard
          title="FRONT END"
        >
          <VCardText>
            A highly skilled and experienced Javascript Developer with expertise in Vue 3, strong experience in state management with Pinia, Vuetify, Vuexy theme, and Casl for role or ability authentication. Experienced in creating dynamic and interactive web applications with a strong focus on user experience.
          </VCardText>
          <VCardText>
            Skills:
          </VCardText>
          <VCardText>
            <ul>
              <li>=> Vue 3</li>
              <li>=> HTML5/CSS3</li>
              <li>=> JavaScript ES6+</li>
              <li>=> Vuexy based on Vuetify for UI design</li>
              <li>=> Pinia for state management</li>
              <li>=> Implemented Casl for role or ability authentication to manage user permissions and roles.</li>
              <li>=> Integrated REST APIs to fetch data from external sources and display them in the application.</li>
              <li>=> Utilized Git and version control with Feature Branch Workflow model to manage the development process and ensure code quality.</li>
              <li>=> Continuous Integration (CI) is a software development practice</li>
            </ul>
          </VCardText>
          <VCardTitle class="ma-2">
            BACK END
          </VCardTitle>
          <VCardText>
            I am a skilled Node.js backend developer with a passion for creating secure and reliable applications. With experience using MongoDB, Express, JWT, and Postman for testing API, I have a strong understanding of web development concepts and a commitment to best practices for security and reliability.
          </VCardText>
          <VCardText>
            Skills:
          </VCardText>
          <VCardText>
            <ul>
              <li>=> 💗 Node.js</li>
              <li>=> Express</li>
              <li>=> Security practices, such as encryption, hashing, and access control.</li>
              <li>=> Designed and implemented a secure RESTful API using Node.js and Express.</li>
              <li>=> Wrote automated tests using Postman to ensure API security and reliability.</li>
              <li>=> Implemented access control using JWT authentication and role-based access control.</li>
              <li>=> Designed and implemented a secure MongoDB database schema with proper data validation and indexing.</li>
            </ul>
          </VCardText>
          <VCardTitle class="ma-2">
            HOBBIES
          </VCardTitle>
          <VCardText>
            Penetration testing with expertise in various tools and techniques for identifying and exploiting vulnerabilities. Possesses strong analytical and problem-solving skills, and a proven ability to think creatively and outside the box to achieve testing objectives.
          </VCardText>
          <VCardText>
            Tools:
          </VCardText>
          <VCardText>
            <ul>
              <li>./ Nmap: A powerful port scanner that can be used to identify open ports and services on a target system.</li>
              <li>./ Metasploit: A framework that allows testers to find and exploit vulnerabilities in target systems.</li>
              <li>./ Burp Suite: A suite of tools for web application testing, including scanning for vulnerabilities and intercepting and modifying HTTP requests.</li>
              <li>./ Wireshark: A network protocol analyzer that can capture and display packets of data on a network.</li>
              <li>./ SQLMap: A tool for automated SQL injection testing.</li>
              <li>./ Hashcat: A password cracking tool that supports many different algorithms and formats.</li>
              <li>../../../../../</li>
            </ul>
          </VCardText>
        </VCard>
      </VCard>
    </VCol>

    <VCol cols="12" />
  </VRow>
</template>
