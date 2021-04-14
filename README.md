User Interface Specification Document

●Angular 11.0.5
●NGRX data state managment
●PWA
●Socket.io
●Node.js (Express)

You are required to develop a Progressive Web Application (WPA), for a fictitious Car
management application. 
The application allows a luxury car brand owner to track real-time
his/her movements, or play-back older trips.

The application must pertain to the following functional requirements:

● Playback a mobility track in GeoJSON format (available here) that simulates the
movement of a car in Cyprus. This track contains points that indicate the precise
location of a car at various points in time.

● A back-end service is responsible for handling the playback. This service should
introduce a randomized time delay between location points. The delay bounds should
be configurable.

● Locations should be streamed to the client via Websockets.

● The front-end should be able to render on-map the streamed data points in real time.

● The front-end should have two components
○ A map
○ A list that records rendered points in chronological order and allows you to
selectively navigate them.

● The front-end should handle back-end disconnections, and allow the user to navigate
the historic data points seamlessly.
