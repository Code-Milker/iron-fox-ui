// // API endpoint URL
// const apiEndpoint = "http://localhost:8000/generate-report";
// // Button click event handler
// document.getElementById("generate-report-button").addEventListener(
//   "click",
//   async () => {
//     // Get the input value
//     const transactionHash = document.getElementById("trace-input").value;
//
//     // Basic validation
//     if (!transactionHash) {
//       alert("Please enter a valid address or transaction hash.");
//       return;
//     }
//
//     try {
//       // Call the API with fetch
//       const response = await fetch(apiEndpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ transactionHash }),
//       });
//
//       // Check if the response is successful
//       if (!response.ok) {
//         throw new Error(`API call failed with status ${response.status}`);
//       }
//
//       // Parse and handle the response
//       const data = await response.json();
//
//       // Display a success message or render the report (simplified here)
//       alert(`Report generated successfully: ${data.message}`);
//     } catch (error: Error) {
//       console.error("Error generating report:", error.message);
//       alert("Failed to generate the report. Please try again.");
//     }
//   },
// );
