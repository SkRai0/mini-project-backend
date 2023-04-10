const userModel = require('./../models/userModel');

exports.getAllUsers = async (req,res) => {
    try {
        const user = await userModel.find()
        res.status(200).json({
			status: 'Success',
			data: {
				user
			},
		});
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            err: err
        })       
    }
}

exports.getuser = async (req, res) => {
	try{
		const user = await userModel.findById(req.params.id)
		res.status(200).json({
			status: 'Success',
			data: {
				user
			},
		});
	}catch(err){
		res.status(400).json({
			status: 'Fail',
			message: 'Cannot get user'
		})
	}
}

exports.postuser = async (req, res) => {
	try{
		const newuser = await userModel.create(req.body)
		res.status(201).json({
			status: 'Success',
			data: {
				user: newuser,
			},
		});
	}catch(err){
		res.status(400).json({
			status: 'Fail',
			message: 'Cannot create user',
            err: err
        })
	}
}

exports.updateuser = async (req, res) => {
	try{
		const user = await userModel.findByIdAndUpdate(req.params.id, req.body)

		res.status(200).json({
			status: 'Success',
			data: {
				user
			}
		})
	}catch(err){
		res.status(400).json({
			status: 'Failed',
			message: 'Could not update user'
		});
	}
}

exports.deleteuser = async (req, res) => {
	
	try {
		await userModel.findByIdAndDelete(req.params.id)
		res.status(200).json({
			status: 'Success',
			data: null
		})
		console.log(req.params.id)
	} catch (err) {
		res.status(400).json({
			status: 'Failed',
			message: 'Could not delete'
		})
	}
}