document.addEventListener("DOMContentLoaded", () => {
    
    // task 1
    {
        const deepFreezeObject = (object) => {
            Object.freeze(object);
            Object.values(object).forEach(value => {
                if (value && typeof value === 'object' && !Object.isFrozen(value)) {
                    deepFreezeObject(value);
                }
            });
        };
        
        const directoryStructure = {
            folderName: "root",
            folderType: "directory",
            items: [
                {
                    folderName: "folder1",
                    folderType: "directory",
                    items: [
                        { fileName: "file1.txt", itemType: "file" },
                        { fileName: "file2.txt", itemType: "file" }
                    ]
                },
                {
                    folderName: "folder2",
                    folderType: "directory",
                    items: [
                        { fileName: "file3.txt", itemType: "file" }
                    ]
                }
            ]
        };
        
        deepFreezeObject(directoryStructure);
    }

    // task 2
    {
        function calculateDaysDifference(startDate, endDate) {
            const timeDifference = Math.abs(new Date(endDate) - new Date(startDate));
            return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        }
        
        const start = "2024-03-12";
        const end = "2024-03-20";
        console.log(`Задача 2:\n Дні між датами ${start} і ${end}: ${calculateDaysDifference(start, end)}`);
    }

    // task 3
    {
        function getAge(birthDate) {
            const birth = new Date(birthDate);
            const current = new Date();
            
            let age = current.getFullYear() - birth.getFullYear();
            if (current < new Date(current.getFullYear(), birth.getMonth(), birth.getDate())) {
                age--;
            }
            
            return age;
        }

        console.log(`Задача 3:\n Вік на даний момент: ${getAge("1996-01-01")}`);
    }

    // task 4
    {
        function getTimeUntil(targetDate) {
            const target = new Date(targetDate);
            const now = new Date();
            
            if (target <= now) {
                return "Невірна дата: дата вже пройшла.";
            }
        
            const timeLeft = target - now;
            const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
            return `${daysLeft} днів, ${hoursLeft} годин, ${minutesLeft} хвилин, ${secondsLeft} секунд`;
        }
        
        console.log(`Задача 4:\n Залишилось часу до дати: ${getTimeUntil("2024-03-19T00:00:00")}`);
    }

    // task 5
    {
        function countBusinessDays(deadline) {
            let businessDays = 0;
            const today = new Date();
            
            while (today.getTime() < deadline.getTime()) {
                if (today.getDay() !== 0 && today.getDay() !== 6) {
                    businessDays++;
                }
                today.setDate(today.getDate() + 1);
            }
        
            return businessDays;
        }
        
        console.log(`Задача 5:\n Робочих днів до дедлайну: ${countBusinessDays(new Date('2024-03-31'))}`);
    }
});
