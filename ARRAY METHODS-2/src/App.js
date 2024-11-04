
import './App.css';

function App() {
  let alphabeticalWords =["Apple","Ball","Car","Doll","Egg","Fish","Grapes","Hat","Ice Cream","Jeep","Kite","Lion","Moon","Nest","Orange","Pen","Queen","Rose","Star","Egg","Tiger","Umbrella","Van","Watch","X-Ray","Yalk","Zeebra"]
  return (
    <div className="App">
      <button type='button' onClick={()=>{
        console.log(alphabeticalWords.length);
        for(let m=0;m<alphabeticalWords.length;m++){
          console.log(alphabeticalWords[m]);
        }
      }}>Length</button>

      <button type='button' onClick={()=>{
        console.log(alphabeticalWords.at(5));
        }}>at</button>

      <button type='button' onClick={()=>{
        console.log(alphabeticalWords);
        console.log(alphabeticalWords.toString());
        console.log(alphabeticalWords.join("🙂"));
      }}>toString/join</button>

      <button type='button' onClick={()=>{
        
        alphabeticalWords.push("Apple");
        console.log(alphabeticalWords);
      }}>push</button>

      <button type='button' onClick={()=>{
        alphabeticalWords.pop();
        console.log(alphabeticalWords);
      }}>pop</button>

      <button type='button' onClick={()=>{
        alphabeticalWords.shift();
        console.log(alphabeticalWords);
      }}>shift</button>

      <button type='button' onClick={()=>{
        alphabeticalWords.unshift("Zeebra");
        console.log(alphabeticalWords);
        }}>unShift</button>
        
      <button type='button' onClick={()=>{
        alphabeticalWords.splice(3,2);
        console.log(alphabeticalWords);
      }}>splice</button>
      <br></br>
      <button type='button' onClick={()=>{
        console.log(alphabeticalWords);
         delete alphabeticalWords[5];
        console.log(alphabeticalWords);
        alphabeticalWords.splice(5,1);
        console.log(alphabeticalWords);
       }}>delete</button>

      <button type='button' onClick={()=>{
        let fruits=["Apple","Banana","Mango"];
        let vegetables=["Tomato","carrot","Beans"];
        let flowers=["Jasmine","Rose","Lotus"];
        let treeProducts=fruits.concat(vegetables,flowers);
        console.log(fruits);
        console.log(vegetables);
        console.log(flowers);
        console.log(treeProducts);


        let treeProducts1=[...fruits,...vegetables,...flowers];
        console.log(treeProducts1);
      }}>concat</button>

      <button type='button' onClick={()=>{
        let teluguActors=["Nani","Mahesh Babu","NTR"];
        let tamilActors=[["Surya","Karthi"],"Vijay","Siva Karthikeya"];
        let hindiActors=["Aishwarya Rai","Ranbeer","Alia Bhatt"];
        let actors =[teluguActors,tamilActors,hindiActors];
        console.log(actors);
        let allActors=actors.flat(2);
        console.log(allActors);

      }}>flat</button>

      <button type='button' onClick={()=>{
        console.log(alphabeticalWords);
        let letters=alphabeticalWords.slice(5,10);
        console.log(letters);
      }}>slice</button>

      <button type='button' onClick={()=>{
        console.log(alphabeticalWords);
        let letters1=alphabeticalWords.fill("Letters",5,10);
        console.log(letters1);
      }}>fill</button>
      <button type='button' onClick={()=>{
        
        let movieName="Bahubali-The Begining"
        console.log(movieName);
        let arr = Array.from(movieName);
        console.log(arr);
      }}>from</button>

      <button type='button' onClick={()=>{
        let result= alphabeticalWords.includes("Frog");
        console.log(result);
        let result1= alphabeticalWords.includes("Fish");
        console.log(result1);
      }}>includes</button>

      <button type='button' onClick={()=>{
        let result=alphabeticalWords.indexOf("Egg");
        console.log(result);
      }}>indexOf</button>
      <button type='button' onClick={()=>{
         let result=alphabeticalWords.lastIndexOf("Egg");
         console.log(result);
      }}>lastIndexOf</button>
      <button type='button' onClick={()=>{
        console.log(alphabeticalWords);
        let letters=alphabeticalWords.reverse();
        console.log(letters);
      }}>reverse</button>
      <button type='button' onClick={()=>{
        let movie = ["Kalki"]
        let arr =Array.isArray(movie);
        console.log(arr);
        let movie1 = "Devara"
        let arr1 =Array.isArray(movie1);
        console.log(arr1);
      }}>isArray</button>

      <button type='button' onClick={()=>{
       let words= ["Ball","Dog","Ant","Elephant","Cat"]
        let letters =words.sort();
        console.log(letters);
      }}>sort</button>
      <br></br>
      <button type='button' onClick={()=>{
        alphabeticalWords.forEach((ele,i)=>{
          console.log(`${i}--${ele}`)
        })
      }}>forEach</button>
      <button type='button' onClick={()=>{
        let marksArray =[98,89,76,65,55,45];
       let result= marksArray.every((ele,i)=>{
          return ele >=35
        });
        if(result===true){
          console.log("Student Passed in Tenth");
        }else{
          console.log("Student Failed in Tenth");
        }

        // if(marksArray[0]>=35&&
        //   marksArray[1]>=35&&
        //   marksArray[2]>=35&&
        //   marksArray[3]>=35&&
        //   marksArray[4]>=35&&
        //   marksArray[5]>=35
        // ){
        //    console.log("Student Passed in Tenth");
        // }else{
        //   console.log("Student Failed in Tenth");
        // }
      }}>every</button>
      <button type='button' onClick={()=>{
        let marksArray =[98,89,76,65,55,45];
        let result =marksArray.some((ele,i)=>{
           return ele<35
        });
        if(result===true){
          console.log("Failed");
        }else{
          console.log("Passed");
        }

      }}>some</button>
      <button type='button' onClick={()=>{
        let marksArray =[98,89,76,66,55,45,54,68,79,49,85,23,19,20,25];
        let filteredArr=marksArray.filter((ele,i)=>{
          return ele %2!==0;
        });
        console.log(filteredArr);
      }}>filter</button>
      <button type='button' onClick={()=>{
        let marksArray =[48,35,76,66,98,45,54,68,79,49,85,23,19,20,25];
        let findElement= marksArray.find((ele,i)=>{
          return ele>90;
        });
        let index= marksArray.findIndex((ele,i)=>{
          return ele>90;
        });
        console.log(findElement);
        console.log(index);
        
      }}>find/findIndex</button>

      <button type='button' onClick={()=>{
         let marksArray =[11,22,35,43,98,45,54,68,79,49,85,23,95,20,25];
         let findElement= marksArray.findLast((ele,i)=>{
          return ele>90;
        });
         let index = marksArray.findLastIndex((ele,i)=>{
           return ele>90;
         });
         console.log(findElement);
         console.log(index);
      }}>findLast/findLastIndex</button>

      <button type='button' onClick={()=>{
        let string =["A","E","I","O","U"];
        let result= string.reduce((tot=0,ele,i)=>{
          return tot + ele;
       });
       console.log(result);
        let result1 =string.reduceRight((tot=0,ele,i)=>{
        return tot + ele;
       });
       console.log(result1);
       }}>reduce/reduceRight</button>

      <button type='button' onClick={()=>{
       let  actors= ["Nani","Prabhas","Surya","NTR","Mahesh Babu"];
       let result = actors.map((ele,i)=>{
        return `Sri ${ele} ji`
       });
       console.log(actors)
       console.log(result);
      }}>map</button>
      
      {alphabeticalWords.map((ele,i)=>{
        return <h1>{ele}</h1>
      })}
      
      
    </div>
  );
}

export default App;
