const { CreateManagerService } = require("../../services/admin/manager.service")
const { CreateWriterService } = require("../../services/user/writer.service")

exports.CreateManager = async () => {
    CreateManagerService
}