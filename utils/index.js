/**
 * Attaches a label with a given value to the error object given as the first argument.
 * Labels are stored under the "labels" property of the error object with the label name used as the key. Label values can be of any type.
 * If the error is not enrichable (is not an object), this function intentionally does nothing, to avoid breaking the flow when errors are scalars.
 * 
 * @param err The error object to be enriched with the label given.
 * @param {String} label_name The label key, to be stored under the "labels" property of the error.
 * @param label_value The label value. Can be any scalar value. Putting names of error-handling layers (catch, callback wrappers) here is usually a good idea.
 */

module.exports.AggregateSnapshot = require('./AggregateSnapshot.js').AggregateSnapshot;
module.exports.tryWith = require('./tryWith.js').tryWith;
module.exports.loadAggregate = require('./loadAggregate.js').loadAggregate;
module.exports.createAggregateLoader = require('./loadAggregate.js').createAggregateLoader;
module.exports.enrichError = require('./enrichError.js').enrichError;
module.exports.hashTransform = require('./hashTransform.js').hashTransform;
module.exports.PublishMultiplexer = require('./PublishMultiplexer').PublishMultiplexer;
module.exports.Repository = require('./Repository').Repository;
module.exports.deriveUUID = require('./deriveUUID').deriveUUID;
module.exports.SnapshotStrategy = require('./SnapshotStrategy');
module.exports.DelayedShiftArrayQueue = require('./Queue').DelayedShiftArrayQueue;
module.exports.WritableQueue = require('./WritableQueue').WritableQueue;
module.exports.ResourceQueueManager = require('./ResourceQueueManager').ResourceQueueManager;
