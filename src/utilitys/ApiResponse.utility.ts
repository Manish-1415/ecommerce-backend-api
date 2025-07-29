
class ApiResponse {
  statusCode: number;
  message: string;
  data: object;

  // Constructor is for the properties we want to make an instance of , simply those values that we want to make properties in our
  constructor(statusCode: number, message: string, data: object) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;
