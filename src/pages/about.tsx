import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 ">
      <div className="bg-purpleg mt-12 rounded p-4 shadow-md">
        <h1 className="mb-4  text-center font-bold text-white">
          T3: Creating scalable applications
        </h1>
        <p className="text-white">
          T3 is a complete and secure application stack for creating
          developments with Next.js and TypeScript. It provides a set of tools
          and libraries to make scalable, maintainable applications and includes
          features such as built-in support for server-side rendering, automatic
          code splitting, and integrated development environment (IDE) support
          for <br></br> T3 offers a set of best practices and conventions for
          structuring and building Next.js applications, making it easy to
          create a new project and helping ensure that the code base is
          organized and consistent. Why use T3 to develop apps? Like Jamstack,
          T3 is a dedicated set of libraries and frameworks that use a specific
          methodology to build modern web applications. In the case of T3, the
          focus is on simplicity, modularity and security. What are the key
          components of T3? T3 includes various components depending on the
          specific needs of each application. Here are some examples of the
          tools and libraries included: Next.js: Framework for building React
          applications, providing built-in support for server-side rendering and
          automatic code splitting, among others. TypeScript: JavaScript
          superset that provides greater developer productivity and code quality
          through type checking and object-oriented programming. Tailwind CSS –
          CSS framework that provides a set of predefined classes that can be
          used to style components quickly and easily. tRPC: Query language for
          the API and runtime to execute data queries. More from tRPC. Prisma -
          Open source data access tool that provides a simple and powerful way
          to interact with databases in TypeScript. NextAuth.js - Open source
          library for adding authentication and authorization functionality to
          Next.js applications.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
