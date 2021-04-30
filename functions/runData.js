exports.handler = async (event, context) => {
  const runs = [
    { title: "Fast 10K with Matt", location: "Sandy Creek Park" },
    { title: "Group 2 miler", location: "Downtown" },
    { title: "Solo 12 mile monring run", location: "Home to Botans" },
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(runs),
    };
  }

  return {
    statusCode: 401, // unauthenticated
    body: JSON.stringify({
      message: "You must be logged in to view this content",
    }),
  };
};
