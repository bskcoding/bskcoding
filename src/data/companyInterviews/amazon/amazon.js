// AUTO-GENERATED file — company-wise interview data.
// Source: Amazon interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "amazon",
  "name": "Amazon",
  "interviews": [
    {
      "name": "Amazon",
      "questionCount": 3,
      "rounds": [
        {
          "name": "Technical L1 Interview (Coding)",
          "questions": [
            {
              "question": "Validate an IP address without using any inbuilt methods efficiently",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public class IPAddressValidator {\n    public static boolean isValidIP(String ip) {\n        if (ip == null || ip.isEmpty()) return false;\n\n        String[] parts = new String[4];\n        int partIndex = 0, num = 0, count = 0;\n        boolean hasNum = false;\n\n        for (int i = 0; i < ip.length(); i++) {\n            char c = ip.charAt(i);\n            if (c >= '0' && c <= '9') {\n                num = num * 10 + (c - '0');\n                hasNum = true;\n                if (num > 255) return false;\n            } else if (c == '.') {\n                if (!hasNum || partIndex >= 3) return false;\n                parts[partIndex++] = String.valueOf(num);\n                num = 0;\n                hasNum = false;\n                count++;\n            } else {\n                return false;\n            }\n        }\n\n        if (partIndex != 3 || !hasNum) return false;\n        return true;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(isValidIP(\"192.168.1.1\")); // true\n        System.out.println(isValidIP(\"256.100.100.100\")); // false\n        System.out.println(isValidIP(\"192.168.1.\")); // false\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Technical L2 Interview (Coding)",
          "questions": [
            {
              "question": "Pacific Atlantic Water Flow",
              "answer": "Watch on YouTube (https://youtu.be/yH0DesUBuFo?si=M0pcOaAy8Rm4qluD)",
              "code": {
                "language": "java",
                "content": "class Solution {\n    public List<List<Integer>> pacificAtlantic(int[][] heights) {\n        List<List<Integer>> ansList=new ArrayList<>();\n        int row=heights.length,col=heights[0].length;\n        boolean pacific[][]=new boolean[row][col];\n        boolean atlantic[][]=new boolean[row][col];\n        for(int i=0;i<row;i++){\n            dfs(i,0,heights,pacific,Integer.MIN_VALUE);\n            dfs(i,col-1,heights,atlantic,Integer.MIN_VALUE);\n        }\n        for(int j=0;j<col;j++){\n            dfs(0,j,heights,pacific,Integer.MIN_VALUE);\n            dfs(row-1,j,heights,atlantic,Integer.MIN_VALUE);\n        }\n        for(int i=0;i<row;i++){\n            for(int j=0;j<col;j++){\n                if(pacific[i][j]&&atlantic[i][j]){\n                    ansList.add(Arrays.asList(i,j));\n                }\n            }\n        }\n        return ansList;\n    }\n    void dfs(int i,int j,int[][] heights, boolean ocean[][],int height){\n        if(i<0||j<0||i>=heights.length||j>=heights[0].length||ocean[i][j]||height>heights[i][j]){\n            return;\n        }\n        ocean[i][j]=true;\n        dfs(i+1,j,heights,ocean,heights[i][j]);\n        dfs(i-1,j,heights,ocean,heights[i][j]);\n        dfs(i,j+1,heights,ocean,heights[i][j]);\n        dfs(i,j-1,heights,ocean,heights[i][j]);\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Technical L3 Interview (System Design)",
          "questions": [
            {
              "question": "Chef Booking  -System Design",
              "answer": "1. System Requirements\n1.1 Functional Requirements\n- Users can register and log in.\n- Users can search for chefs based on availability, cuisine, and location.\n- Users can book a chef for a specific time slot.\n- Users can cancel or reschedule bookings.\n- Chefs can accept or reject bookings.\n- Notifications for booking confirmations, rejections, and reminders.\n- Admin dashboard for managing users, chefs, and bookings.\n1.2 Non-Functional Requirements\n- Scalability → Handle large bookings efficiently.\n- Performance → Optimize API responses and database queries.\n- Reliability → Ensure high availability and fault tolerance.\n- Security → Authentication, authorization, and data protection.\n- Observability → Logging, monitoring, and alerting.\n2. High-Level Architecture\n2.1 Components\n1. Frontend  → React.js / Angular\n2. Backend  → Spring Boot (Java)\n3. Database  → PostgreSQL (Relational DB) + Redis (Caching)\n4. Authentication  → JWT-based authentication\n5. Messaging Queue  → Kafka / RabbitMQ for notifications\n6. Caching  → Redis for faster lookup of chef availability\n7. Storage  → AWS S3 / Firebase for chef images & documents\n8. Load Balancer  → Nginx / AWS ALB for handling traffic\n9. Microservices  (Optional for scalability) →\n- User Service\n- Chef Service\n- Booking Service\n- Notification Service\n3. Database Design\n3.1 Database Schema (Relational - PostgreSQL)\nUsers Table\nChefs Table\nBookings Table\nNotifications Table\n4. API Design (RESTful Services)\n4.1 Authentication API\n- POST /auth/register → Register new users\n- POST /auth/login → Authenticate user and return JWT token\n4.2 User API\n- GET /users/{userId} → Fetch user details\n- PUT /users/{userId} → Update user profile\n4.3 Chef API\n- GET /chefs → Get list of available chefs\n- GET /chefs/{chefId} → Get chef details\n- POST /chefs → Add a new chef (Admin Only)\n- PUT /chefs/{chefId} → Update chef details\n4.4 Booking API\n- POST /bookings → Create a new booking\n- GET /bookings/{bookingId} → Fetch booking details\n- PUT /bookings/{bookingId} → Reschedule booking\n- DELETE /bookings/{bookingId} → Cancel booking\n4.5 Notification API\n- GET /notifications → Fetch user notifications\n- POST /notifications → Send notifications\n5. Optimization Techniques\n5.1 Caching (Redis)\n- Store chef availability in Redis to reduce database load.\n- Store frequently accessed user data (e.g., profile info) in Redis.\n5.2 Database Indexing\n- Add indexes on frequently queried columns like email, booking_time, and chef_id.\n5.3 Load Balancing\n- Use Nginx / AWS ALB to distribute traffic among multiple backend instances.\n5.4 Background Jobs for Notifications\n- Use Kafka / RabbitMQ to process notifications asynchronously.\n5.5 Microservices Approach (Optional)\n- User Service → Handles user authentication and profile management.\n- Chef Service → Manages chef details and availability.\n- Booking Service → Handles booking and scheduling logic.\n- Notification Service → Sends emails, SMS, and push notifications.\n6. Security Measures\n6.1 Authentication & Authorization\n- Use JWT-based authentication for securing APIs.\n- Implement role-based access control (RBAC) for user roles.\n6.2 Input Validation\n- Validate all API inputs using Spring Boot validation.\n6.3 Rate Limiting\n- Implement API rate limiting using Spring Boot RateLimiter to prevent abuse.\n6.4 Secure Data Storage\n- Encrypt sensitive data like passwords using BCrypt hashing.\n7. Deployment & DevOps\n7.1 CI/CD Pipeline\n- GitHub Actions / Jenkins: for automated testing and deployment.\n- Docker: for containerized deployment.\n- Kubernetes: for scalable microservices.\n7.2 Monitoring & Logging\n- Use Prometheus + Grafana for monitoring.\n- ELK Stack (Elasticsearch, Logstash, Kibana): for logging and alerting.\n7.3 Cloud Deployment\n- AWS / GCP / Azure: for cloud hosting.\n- S3 Storage: for storing chef images and documents.\n8. Tech Stack Summary\n| Component       | Technology             |\n|---------------------|--------------------------|\n| Frontend           | React.js / Angular        |\n| Backend           | Spring Boot (Java)        |\n| Database           | PostgreSQL / MySQL        |\n| Caching            | Redis                      |\n| Queueing System    | Kafka / RabbitMQ          |\n| Authentication     | JWT + OAuth2              |\n| Storage           | AWS S3 / Firebase         |\n| Monitoring        | Prometheus + Grafana      |\n| Deployment        | Docker + Kubernetes       |\n9. Conclusion\n- Scalable: Microservices architecture for high scalability.\n- Efficient: Optimized database queries and caching.\n- Secure: JWT-based authentication and role-based access control.\n- Fault-Tolerant: Background jobs for async processing.\n- Cloud-Ready: Deployable on AWS/GCP/Azure with containerization.",
              "code": {
                "language": "sql",
                "content": "CREATE INDEX idx_email ON users(email);\nCREATE INDEX idx_booking_time ON bookings(booking_time);\nCREATE INDEX idx_chef_id ON bookings(chef_id);"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 3
};
