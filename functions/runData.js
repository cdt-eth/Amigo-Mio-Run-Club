exports.handler = async (event, loginInfo) => {
  const runInfo = [
    { title: "Fast 10K with Matt", location: "Sandy Creek Park" },
    { title: "Group 2 miler", location: "Downtown" },
    { title: "Solo 12 mile monring run", location: "Home to Botans" },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(runInfo),
  };
};
