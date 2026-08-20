

const scriptsInEvents = {

	async Gamepage_Event33_Act1(runtime, localVars)
	{
		const allCars = runtime.objects.Cars.getAllInstances().filter(car => car.isOnScreen());
		const cars = allCars.filter(car => !car.instVars.Moving);
		const movableCars = [];
		for (const car of allCars)
			car.instVars.CanMove = false;
		const imagePointNames = ["Image Point 1", "Image Point 2"];
		const stepDistance = 8;
		const maxDistance = Math.hypot(runtime.layout.width, runtime.layout.height) + 200;
		
		function isPointInsideLayout(x, y)
		{
			return x >= 0 && x <= runtime.layout.width && y >= 0 && y <= runtime.layout.height;
		}
		
		function hasObstacleInStraightLine(car, startX, startY)
		{
			for (let distance = 0; distance <= maxDistance; distance += stepDistance)
			{
				const x = startX + Math.cos(car.angle) * distance;
				const y = startY + Math.sin(car.angle) * distance;
		
				if (!isPointInsideLayout(x, y))
					return false;
		
				if (allCars.some(other => other !== car && other.containsPoint(x, y)))
					return true;
			}
		
			return false;
		}
		
		for (const car of cars)
		{
			const canMove = imagePointNames.every(name =>
				!hasObstacleInStraightLine(car, car.getImagePointX(name), car.getImagePointY(name)));
		
			car.instVars.CanMove = canMove;
			if (canMove)
				movableCars.push(car);
		}
		
		if (movableCars.length)
		{
			const pickedCar = movableCars[Math.floor(Math.random() * movableCars.length)];
			pickedCar.behaviors.Flash.stop();
			pickedCar.behaviors.Flash.flash(0.12, 0.12, 1.5);
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
