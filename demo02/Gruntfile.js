//test Postcss via GruntJs
//var grunt=require('grunt');

module.exports = function(grunt) {
 
  grunt.initConfig({
   
    postcss: {
 
      options: {
      processors: [require('autoprefixer')(),
  require('cssnext')(),
  require('precss')()
  ]
      },
      dist: {
      	src: 'src/style.css',
        dest: 'dest/style.css'
         
      }
 
    }
  
  });
 

  //grunt.task.loadTasks('../node_modules/grunt-postcss');
  grunt.loadNpmTasks('grunt-postcss');
 
};