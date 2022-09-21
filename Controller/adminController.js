
const con = require("../Database/db");
//Create Doctor Table

        module.exports.AddAdmin =(req,res)=>{
        const{A_id,Name,DOB,Gender,Email_ID,Mobile_no,Address} = req.body
        con.adminData(A_id,Name,DOB,Gender,Email_ID,Mobile_no,Address,(err)=>{
                if(err) throw err;
                else 
                console.log("Inserted Data successfully");
            })}
        
//Insert Doctor Data
        module.exports.AddDoctor =(req,res)=>{
        const {D_Id,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Schedule}=req.body;
        con.doctorData(D_Id,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Schedule,(err,result)=>{
           if(err)
           {
                // throw err;
                if(err.code === 'ER_DUP_ENTRY' )
                    {
                    res.send({message:"Doctor Already Registered !"});
                    }
                else if(err.code === 'ER_NO_SUCH_TABLE')
                    {
                    con.createDoctorTable((err,result)=>{
                    if(err)
                        // throw err; 
                        res.send({message:"Table Already exits !"});
                     else
                        res.send({message:"Doctor Table Created Successfully !"});
                        });
                    }
            }
            else 
              res.send({message:"Doctor Added Successfully !"});
        })}
    


    //Profile
     module.exports.Profile = (req,res)=>{
        const Email = req.body.Email;
        const Password = req.body.Password;

        con.profile(Email,Password,(err,results)=>{
            if(err)
            {
                throw err;
            }
            else
            {
                console.log(results);
            }
        })

        

     }
    
    
        //Updaet Doctor Details
    

    //Payment Request
    //Records
    //Logouts