// Dummy course data
const courses = [
  { id: 1, title: "Web Development Basics", category: "Programming", description: "Learn HTML, CSS, and JavaScript to build modern websites." },
  { id: 2, title: "Python for Beginners", category: "Programming", description: "Start coding with Python and explore data science basics." },
  { id: 3, title: "Digital Marketing", category: "Marketing", description: "Learn SEO, social media, and online advertising strategies." }
];

// Get course ID from URL
const urlParams = new URLSearchParams(window.location.search);
const courseId = parseInt(urlParams.get("id"));

// Find course
const course = courses.find(c => c.id === courseId);

// Display course details
if (course) {
  document.getElementById("course-title").textContent = course.title;
  document.getElementById("course-category").textContent = "Category: " + course.category;
  document.getElementById("course-description").textContent = course.description;
} else {
  document.getElementById("course-detail").innerHTML = "<p>⚠️ Course not found.</p>";
}
