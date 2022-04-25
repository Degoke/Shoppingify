const fs = require('fs')

const baseFile = __dirname + '/.env'

const getprojectEnv = (project) => {
    return __dirname + "/" + project + "/.env"
}

const checkIfFileExists = (file) => {
    if(!fs.existsSync(file)) {
        return false
    }
    return true
}

async function compile() {
    try {
        const projects = process.argv.slice(2)
        const baseFileExists = checkIfFileExists(baseFile)
        if(baseFileExists) {
            fs.unlinkSync(baseFile)
        }

        projects.forEach(async (project) => {
            try {
                const file = getprojectEnv(project)
            const doesExist = await checkIfFileExists(file)
            if(!doesExist) {
                console.log("file", file, "does not exist")
            }

            if(doesExist) {
                const data = await fs.readFileSync(file)

            await fs.appendFileSync(baseFile, "\n" + data + "\n")
            }
            }
            catch(error) {
                console.log(error)
            }
        })
    }

    catch(error) {
        console.log(error)
    }
}

compile().catch((error) => console.log('Error'))