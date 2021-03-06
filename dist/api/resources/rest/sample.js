"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _ = require("lodash");
var rest_resource_1 = require("./rest_resource");
var error_1 = require("../../../core/errors/error");
var permissions_1 = require("../addons/permissions");
/**
 * Sample resource class for dealing with sample endpoint.
 */
var SampleResource = (function (_super) {
    __extends(SampleResource, _super);
    function SampleResource(connection) {
        return _super.call(this, 'sample', connection) || this;
    }
    /**
     * Checks if sample slug already exists.
     *
     * @param Slug to check
     * @return An observable that emits the response
     */
    SampleResource.prototype.slugExists = function (slug) {
        return this.connection.get(this.getListMethodPath('slug_exists'), { name: slug });
    };
    /**
     * This method should not be used.
     */
    SampleResource.prototype.query = function (query) {
        if (query['workaroundForQueryOne']) {
            return _super.prototype.query.call(this, _.omit(query, 'workaroundForQueryOne'));
        }
        throw new error_1.GenError("Query method not supported");
    };
    SampleResource.prototype.queryOne = function (query) {
        if (query === void 0) { query = {}; }
        return _super.prototype.queryOne.call(this, __assign({}, query, { workaroundForQueryOne: true }));
    };
    SampleResource.prototype.queryUnannotated = function (query) {
        if (query === void 0) { query = {}; }
        return _super.prototype.query.call(this, __assign({}, query, { descriptor_completed: false }));
    };
    SampleResource.prototype.queryAnnotated = function (query) {
        if (query === void 0) { query = {}; }
        return _super.prototype.query.call(this, __assign({}, query, { descriptor_completed: true }));
    };
    /**
     * Adds sample to collections.
     *
     * @param sampleId Sample id
     * @param collectionIds Array of collection ids
     * @returns {Rx.Observable<void>}
     */
    SampleResource.prototype.addToCollections = function (sampleId, collectionIds) {
        return this.callMethod(sampleId, 'add_to_collection', { ids: collectionIds });
    };
    SampleResource.prototype.create = function (data) {
        throw new error_1.GenError("Create method not supported");
    };
    SampleResource.prototype.replace = function (primaryKey, data) {
        throw new error_1.GenError("Replace method not supported");
    };
    SampleResource.prototype.getPermissions = function (id) {
        return permissions_1.getPermissions(this, id);
    };
    SampleResource.prototype.setPermissions = function (id, permissions) {
        return permissions_1.setPermissions(this, id, permissions);
    };
    return SampleResource;
}(rest_resource_1.RESTResource));
exports.SampleResource = SampleResource;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGkvcmVzb3VyY2VzL3Jlc3Qvc2FtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMEJBQTRCO0FBQzVCLGlEQUE2QztBQUU3QyxvREFBb0Q7QUFDcEQscURBQXFGO0FBR3JGOztHQUVHO0FBQ0g7SUFBb0Msa0NBQTRDO0lBRTVFLHdCQUFZLFVBQXNCO2VBQzlCLGtCQUFNLFFBQVEsRUFBRSxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksbUNBQVUsR0FBakIsVUFBa0IsSUFBWTtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQVUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVEOztPQUVHO0lBQ0ksOEJBQUssR0FBWixVQUFhLEtBQWtCO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxNQUFNLENBQUMsaUJBQU0sS0FBSyxZQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsTUFBTSxJQUFJLGdCQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBSU0saUNBQVEsR0FBZixVQUFnQixLQUF1QjtRQUF2QixzQkFBQSxFQUFBLFVBQXVCO1FBQ25DLE1BQU0sQ0FBQyxpQkFBTSxRQUFRLHlCQUFLLEtBQUssSUFBRSxxQkFBcUIsRUFBRSxJQUFJLElBQUUsQ0FBQztJQUNuRSxDQUFDO0lBSU0seUNBQWdCLEdBQXZCLFVBQXdCLEtBQXVCO1FBQXZCLHNCQUFBLEVBQUEsVUFBdUI7UUFDM0MsTUFBTSxDQUFDLGlCQUFNLEtBQUsseUJBQUssS0FBSyxJQUFFLG9CQUFvQixFQUFFLEtBQUssSUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFJTSx1Q0FBYyxHQUFyQixVQUFzQixLQUF1QjtRQUF2QixzQkFBQSxFQUFBLFVBQXVCO1FBQ3pDLE1BQU0sQ0FBQyxpQkFBTSxLQUFLLHlCQUFLLEtBQUssSUFBRSxvQkFBb0IsRUFBRSxJQUFJLElBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0kseUNBQWdCLEdBQXZCLFVBQXdCLFFBQWdCLEVBQUUsYUFBdUI7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQU8sUUFBUSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVNLCtCQUFNLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLE1BQU0sSUFBSSxnQkFBUSxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxVQUEyQixFQUFFLElBQVk7UUFDcEQsTUFBTSxJQUFJLGdCQUFRLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sdUNBQWMsR0FBckIsVUFBc0IsRUFBVTtRQUM1QixNQUFNLENBQUMsNEJBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLHVDQUFjLEdBQXJCLFVBQXNCLEVBQVUsRUFBRSxXQUF3QztRQUN0RSxNQUFNLENBQUMsNEJBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDTCxxQkFBQztBQUFELENBdEVBLEFBc0VDLENBdEVtQyw0QkFBWSxHQXNFL0M7QUF0RVksd0NBQWMiLCJmaWxlIjoiYXBpL3Jlc291cmNlcy9yZXN0L3NhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJ4IGZyb20gJ3J4JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQge1JFU1RSZXNvdXJjZX0gZnJvbSAnLi9yZXN0X3Jlc291cmNlJztcclxuaW1wb3J0IHtDb25uZWN0aW9ufSBmcm9tICcuLi8uLi9jb25uZWN0aW9uJztcclxuaW1wb3J0IHtHZW5FcnJvcn0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3InO1xyXG5pbXBvcnQge1Blcm1pc3Npb25hYmxlLCBnZXRQZXJtaXNzaW9ucywgc2V0UGVybWlzc2lvbnN9IGZyb20gJy4uL2FkZG9ucy9wZXJtaXNzaW9ucyc7XHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uLy4uL3R5cGVzL3Jlc3QnO1xyXG5cclxuLyoqXHJcbiAqIFNhbXBsZSByZXNvdXJjZSBjbGFzcyBmb3IgZGVhbGluZyB3aXRoIHNhbXBsZSBlbmRwb2ludC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTYW1wbGVSZXNvdXJjZSBleHRlbmRzIFJFU1RSZXNvdXJjZTx0eXBlcy5TYW1wbGUgfCB0eXBlcy5QcmVzYW1wbGU+IGltcGxlbWVudHMgUGVybWlzc2lvbmFibGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb246IENvbm5lY3Rpb24pIHtcclxuICAgICAgICBzdXBlcignc2FtcGxlJywgY29ubmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgc2FtcGxlIHNsdWcgYWxyZWFkeSBleGlzdHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIFNsdWcgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSByZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2x1Z0V4aXN0cyhzbHVnOiBzdHJpbmcpOiBSeC5PYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLmdldDxib29sZWFuPih0aGlzLmdldExpc3RNZXRob2RQYXRoKCdzbHVnX2V4aXN0cycpLCB7IG5hbWU6IHNsdWcgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBxdWVyeShxdWVyeTogdHlwZXMuUXVlcnkpOiBSeC5PYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGlmIChxdWVyeVsnd29ya2Fyb3VuZEZvclF1ZXJ5T25lJ10pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLnF1ZXJ5KF8ub21pdChxdWVyeSwgJ3dvcmthcm91bmRGb3JRdWVyeU9uZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEdlbkVycm9yKFwiUXVlcnkgbWV0aG9kIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHF1ZXJ5T25lKHF1ZXJ5PzogdHlwZXMuUXVlcnlPYmplY3QpOiBSeC5PYnNlcnZhYmxlPHR5cGVzLlNhbXBsZSB8IHR5cGVzLlByZXNhbXBsZT47XHJcbiAgICBwdWJsaWMgcXVlcnlPbmUocXVlcnk6IHR5cGVzLlF1ZXJ5T2JqZWN0SHlkcmF0ZURhdGEpOiBSeC5PYnNlcnZhYmxlPHR5cGVzLlNhbXBsZUh5ZHJhdGVEYXRhIHwgdHlwZXMuUHJlc2FtcGxlSHlkcmF0ZURhdGE+O1xyXG4gICAgcHVibGljIHF1ZXJ5T25lKHF1ZXJ5OiB0eXBlcy5RdWVyeSA9IHt9KTogUnguT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gc3VwZXIucXVlcnlPbmUoey4uLnF1ZXJ5LCB3b3JrYXJvdW5kRm9yUXVlcnlPbmU6IHRydWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVlcnlVbmFubm90YXRlZChxdWVyeT86IHR5cGVzLlF1ZXJ5T2JqZWN0KTogUnguT2JzZXJ2YWJsZTx0eXBlcy5QcmVzYW1wbGVbXT47XHJcbiAgICBwdWJsaWMgcXVlcnlVbmFubm90YXRlZChxdWVyeTogdHlwZXMuUXVlcnlPYmplY3RIeWRyYXRlRGF0YSk6IFJ4Lk9ic2VydmFibGU8dHlwZXMuUHJlc2FtcGxlSHlkcmF0ZURhdGFbXT47XHJcbiAgICBwdWJsaWMgcXVlcnlVbmFubm90YXRlZChxdWVyeTogdHlwZXMuUXVlcnkgPSB7fSk6IFJ4Lk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnF1ZXJ5KHsuLi5xdWVyeSwgZGVzY3JpcHRvcl9jb21wbGV0ZWQ6IGZhbHNlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHF1ZXJ5QW5ub3RhdGVkKHF1ZXJ5PzogdHlwZXMuUXVlcnlPYmplY3QpOiBSeC5PYnNlcnZhYmxlPHR5cGVzLlNhbXBsZVtdPjtcclxuICAgIHB1YmxpYyBxdWVyeUFubm90YXRlZChxdWVyeTogdHlwZXMuUXVlcnlPYmplY3RIeWRyYXRlRGF0YSk6IFJ4Lk9ic2VydmFibGU8dHlwZXMuU2FtcGxlSHlkcmF0ZURhdGFbXT47XHJcbiAgICBwdWJsaWMgcXVlcnlBbm5vdGF0ZWQocXVlcnk6IHR5cGVzLlF1ZXJ5ID0ge30pOiBSeC5PYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5xdWVyeSh7Li4ucXVlcnksIGRlc2NyaXB0b3JfY29tcGxldGVkOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHNhbXBsZSB0byBjb2xsZWN0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc2FtcGxlSWQgU2FtcGxlIGlkXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbklkcyBBcnJheSBvZiBjb2xsZWN0aW9uIGlkc1xyXG4gICAgICogQHJldHVybnMge1J4Lk9ic2VydmFibGU8dm9pZD59XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRUb0NvbGxlY3Rpb25zKHNhbXBsZUlkOiBudW1iZXIsIGNvbGxlY3Rpb25JZHM6IG51bWJlcltdKTogUnguT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbE1ldGhvZDx2b2lkPihzYW1wbGVJZCwgJ2FkZF90b19jb2xsZWN0aW9uJywgeyBpZHM6IGNvbGxlY3Rpb25JZHMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZShkYXRhOiBPYmplY3QpOiBSeC5PYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHRocm93IG5ldyBHZW5FcnJvcihcIkNyZWF0ZSBtZXRob2Qgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVwbGFjZShwcmltYXJ5S2V5OiBudW1iZXIgfCBzdHJpbmcsIGRhdGE6IE9iamVjdCk6IFJ4Lk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEdlbkVycm9yKFwiUmVwbGFjZSBtZXRob2Qgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGVybWlzc2lvbnMoaWQ6IG51bWJlcik6IFJ4Lk9ic2VydmFibGU8dHlwZXMuSXRlbVBlcm1pc3Npb25zW10+IHtcclxuICAgICAgICByZXR1cm4gZ2V0UGVybWlzc2lvbnModGhpcywgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQZXJtaXNzaW9ucyhpZDogbnVtYmVyLCBwZXJtaXNzaW9uczogdHlwZXMuU2V0UGVybWlzc2lvbnNSZXF1ZXN0KTogUnguT2JzZXJ2YWJsZTx0eXBlcy5JdGVtUGVybWlzc2lvbnNbXT4ge1xyXG4gICAgICAgIHJldHVybiBzZXRQZXJtaXNzaW9ucyh0aGlzLCBpZCwgcGVybWlzc2lvbnMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
