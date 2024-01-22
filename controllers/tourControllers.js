const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// Route Handlers
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    message: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1; // multiply with 1 cause req.params.id is a string we turned that a number...
  const tour = tours.find((el) => el.id === id);

  if (!tour) return res.status(404).json({ message: "Invalid ID" });

  res.status(200).json({
    message: "success",
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  /*
      here is why we use writeFile method at this point
      cause we are in the callback function that means
      thats gonna run in  event-loop area thats why we shouldnt
      block the event-loop area with write file sync so
      we need to use async way...
     */
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: newTour,
      });
    }
  );
};
