---
sidebar_position: 6
---

# 6. Integration with Web Apps
Integration with web applications is achieved using an iframe. To implement this, select the desired 
landing page and load it within the iframe. Communication between NPI Billers and the host 
application is seamlessly managed through the web's postMessage API.
It should be noted that origin validation is performed by NPI Billers so please send the host origins 
aka domains to the NCHL team to allow requests.

The following code snippet listens to NPI Billers messages


 ![Example Image](/img/integration_web_apps_first_img.png)
<p align="center" class="centered-caption"></p>




 ![Example Image](/img/integration_in_web_app_second_img.png)
<p align="center" class="centered-caption"></p>

