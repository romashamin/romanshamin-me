module.exports = function(eleventyConfig) {
  // Copy images directly to the output folder
  eleventyConfig.addPassthroughCopy("images");
  // Add this line to copy CSS file
  eleventyConfig.addPassthroughCopy("styles.css");

  return {
    dir: {
      input: ".",      // current folder is the source
      output: "_site", // default output
    }
  };
};